/** @format */

import { H3Event } from "h3";

export const fetchSubtitles = defineCachedFunction(
  async (event: H3Event, request: RequestType) => {
    const { imdbId, season, episode } = request;
    const url = `https://rest.opensubtitles.org/search/${
      season && episode ? `episode-${episode}/` : ""
    }imdbid-${imdbId.slice(2)}${season && episode ? `/season-${season}` : ""}`;
    const headers = {
      "Content-Type": "application/json",
      "X-User-Agent": "VLSub 0.10.3",
    };
    const res = await proxyFetch(url, { headers });
    const text = await res.text();

    try {
      return parseSubtitles(text);
    } catch (jsonError) {
      console.error(`Failed to parse JSON: ${jsonError}`, text);
    }
  },
  { maxAge: 60 * 60 * 24 * 7 }, // 1 week
);

export const convertTmdbToImdb = defineCachedFunction(
  async (event: H3Event, tmdbId: string, mediaType: "movie" | "tv" = "movie") => {
    const url = `https://api.themoviedb.org/3/${mediaType}/${tmdbId}/external_ids?api_key=9867f3f6a5e78a2639afb0e2ffc0a311`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (!data.imdb_id) {
        console.warn(`No IMDB ID found for TMDB ID: ${tmdbId}`);
      }

      return data.imdb_id || null;
    } catch (error) {
      console.error(
        "Error converting TMDB to IMDB:",
        error instanceof Error ? error.message : error,
      );

      return createErrorResponse(
        500,
        "TMDB to IMDB Conversion Error",
        "Failed to convert TMDB ID to IMDB ID. Please check your TMDB API key and the provided TMDB ID.",
      );
    }
  },
  { maxAge: 60 * 60 * 24 * 7 * 3 }, // 3 weeks
);

export const createErrorResponse = (
  code: number,
  message: string,
  details: string,
  example?: string,
) => ({
  code,
  message,
  details,
  example,
  fyi: "For more information, please visit our landing page or contact us at dev@wyzie.ru.",
});
