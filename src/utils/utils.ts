import ISO6391 from 'iso-639-1';

export async function getValidProxy() {
  try {
    const proxiesEnv = process.env.PROXIES;
    if (!proxiesEnv) {
      throw new Error('PROXIES environment variable is not set');
    }
    const proxies = proxiesEnv.split(',');

    for (let i = 0; i < proxies.length; i++) {
      const randomIndex = Math.floor(Math.random() * proxies.length);
      const proxy = proxies[randomIndex];

      try {
        const response = await fetch(proxy, {
          method: 'GET',
        });

        if (response.status === 200) {
          return proxy;
        }
      } catch (error) {
        console.error('Proxy failed:', proxy, error);
      }
    }

    return [];
  } catch (error) {
    console.error('Failed to get valid proxy:', error);
    return [];
  }
}

export async function proxyFetch(url: string, options?: RequestInit): Promise<Response> {
  const proxy = await getValidProxy();
  if (proxy.length === 0) {
    throw new Error('No valid proxy found');
  }

  const proxyOptions = {
    ...options,
    headers: {
      ...options?.headers,
      'Proxy-Authorization': `Basic ${proxy}`
    }
  };

  return fetch(url, proxyOptions);
}

export async function fetchSubtitles(request: RequestType) {
  const { imdbId, season, episode } = request;
  const url = `https://rest.opensubtitles.org/search/${season && episode ? `episode-${episode}/` : ''}imdbid-${imdbId}${season ? `/season-${season}` : ''}`;
  const headers = { 'X-User-Agent': 'VLSub 0.10.2' };

  try {
    const res = await proxyFetch(url, { headers });
    return await res.json();
  } catch (error) {
    console.error('Error fetching subtitles:', error);
    throw new Error('Failed to fetch subtitles. Please try again later.');
  }
}

export async function convertTmdbToImdb(tmdbId: string, mediaType: 'movie' | 'tv' = 'movie'): Promise<string> {
  const url = `https://api.themoviedb.org/3/${mediaType}/${tmdbId}/external_ids?api_key=5b9790d9305dca8713b9a0afad42ea8d`;
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.imdb_id) {
      return data.imdb_id;
    } else {
      throw new Error('IMDB ID not found in the TMDB API response.');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Fetch error:', error.message);
    } else {
      console.error('Error converting TMDB to IMDB:', error);
    }
    throw new Error('Failed to convert TMDB ID to IMDB ID. Please check your TMDB API key and the provided TMDB ID.');
  }
}

export function getDisplayName(isoCode: string): string {
  return isoCode === "pb" ? "Portuguese (Brazilian)" : ISO6391.getName(isoCode);  // add an exception for Portuguese (Brazilian)
}

export const createErrorResponse = (
  code: number,
  message: string,
  details: string,
  example?: string
) => ({
  status: 'error',
  code,
  message,
  details,
  example,
  fyi: `For more information, please visit our landing page or contact us at dev@cozi.lol.`
});