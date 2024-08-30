import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const id = query.id as string;
  const season = query.season ? parseInt(query.season as string) : undefined;
  const episode = query.episode ? parseInt(query.episode as string) : undefined;
  const language = query.language as string | undefined;
  const format = query.format as string | undefined;

  let imdbId: string | undefined;
  let tmdbId: string | undefined;

  if (id.includes('tt')) {
    imdbId = id;
  } else {
    tmdbId = id;
  }

  if (tmdbId) {
    try {
      const mediaType = season !== undefined ? 'tv' : 'movie';
      imdbId = await convertTmdbToImdb(tmdbId, mediaType);
    } catch (error) {
      return createErrorResponse(
        400,
        'TMDB to IMDB Conversion Error',
        'Failed to convert TMDB ID to IMDB ID. Please check your TMDB ID and try again.'
      );
    }
  }

  if (!imdbId) {
    return createErrorResponse(
      400,
      'Missing required parameter',
      'The provided ID is invalid. Please provide a valid IMDb or TMDb ID.'
    );
  }

  if (season !== undefined && (isNaN(season) || season < 1)) {
    return createErrorResponse(
      400,
      'Invalid season number',
      'Season must be a positive integer.',
      '/search?imdbId=tt0111161&season=1'
    );
  }

  if (episode !== undefined && (isNaN(episode) || episode < 1)) {
    return createErrorResponse(
      400,
      'Invalid episode number',
      'Episode must be a positive integer.',
      '/search?imdbId=tt0111161&season=1&episode=1'
    );
  }

  if (episode !== undefined && season === undefined) {
    return createErrorResponse(
      400,
      'Missing season parameter',
      'When specifying an episode, season must also be provided.',
      '/search?imdbId=tt0111161&season=1&episode=1'
    );
  }

  if (language && !/^[a-z]{2,3}(-[A-Z]{2})?(,[a-z]{2,3}(-[A-Z]{2})?)*$/.test(language)) {
    return createErrorResponse(
      400,
      'Invalid language format',
      'Languages must be in ISO 639-1 or ISO 639-2 format, optionally followed by a region code, separated by commas.',
      '/search?imdbId=tt0111161&language=en,es,fr-FR'
    );
  }

  if (format && !/^(srt|ass|vtt|txt|sub|mpl|webvtt|dfxp)$/.test(format)) {
    return createErrorResponse(
      400,
      'Invalid format',
      'Format must be one of the following: srt, ass, vtt, txt, sub, mpl, webvtt, dfxp.',
      '/search?imdbId=tt0111161&format=srt'
    );
  }

  const request: RequestType = { imdbId, season, episode, format };

  try {
    const languages = language ? language.split(',') : undefined;
    return await search(request, languages);
  } catch (error) {
    console.error(error);
    
    if (error instanceof Error) {
      if (error.message.includes('not found')) {
        return createErrorResponse(
          404,
          'Subtitles not found',
          'No subtitles were found for the given parameters. Please check your input and try again.'
        );
      }
    }
    
    return createErrorResponse(
      500,
      'Internal server error',
      'An unexpected error occurred while processing your request. Our team has been notified.'
    );
  }
});
