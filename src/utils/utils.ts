import { H3Event } from "h3";

export const fetchSubtitles = defineCachedFunction(
  async (event: H3Event, request: RequestType) => {
    const { imdbId, season, episode } = request;
    const url = `https://rest.opensubtitles.org/search/imdbid-${imdbId.slice(2)}${season ? `/season-${season}` : ""}${season && episode ? `/episode-${episode}` : ""}`;
    const headers = { "X-User-Agent": "VLSub 0.10.2" };
    const res = await proxyFetch(url, { headers });
    const text = await res.text();

    try {
      const data = JSON.parse(text);
      return data;
    } catch (jsonError) {
      console.error("Failed to parse JSON:", text);
      return createErrorResponse(
        500,
        "JSON Parsing Error",
        "Failed to parse JSON response from OpenSubtitles API. Please try again.",
      );
    }
  },
  { maxAge: 60 * 60 * 24 * 3 }, // Cache results for 3 days
);

export const convertTmdbToImdb = defineCachedFunction(
  async (event: H3Event, tmdbId: string, mediaType: "movie" | "tv" = "movie") => {
    const apiKeys = ["5b9790d9305dca8713b9a0afad42ea8d", "9867f3f6a5e78a2639afb0e2ffc0a311"];
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    const TmdbApiKey = apiKeys[randomIndex];
    const url = `https://api.themoviedb.org/3/${mediaType}/${tmdbId}/external_ids?api_key=${TmdbApiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response}`);
      }
      const data = await response.json();

      if (data && data.imdb_id) {
        return data.imdb_id;
      } else {
        throw new Error(`IMDB ID not found in the TMDB API response. ${data}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error:", error.message);
      } else {
        console.error("Error converting TMDB to IMDB:", error);
      }

      return createErrorResponse(
        500,
        "TMDB to IMDB Conversion Error",
        "Failed to convert TMDB ID to IMDB ID. Please check your TMDB API key and the provided TMDB ID.",
      );
    }
  },
  { maxAge: 60 * 60 * 24 * 7 }, // Cache results for a week
);

export const createErrorResponse = (
  code: number,
  message: string,
  details: string,
  example?: string,
) => ({
  status: "error",
  code,
  message,
  details,
  example,
  fyi: "For more information, please visit our landing page or contact us at dev@wyzie.ru.",
});
