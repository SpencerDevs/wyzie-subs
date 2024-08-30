import { RequestType, ResponseType } from '@/utils/types';

export async function search(request: RequestType, languages?: string[]): Promise<ResponseType[]> {
  try {
    if (request.tmdbId && !request.imdbId) {
      const mediaType = request.season !== undefined ? 'tv' : 'movie';
      request.imdbId = await convertTmdbToImdb(request.tmdbId, mediaType);
    }

    if (!request.imdbId) {
      throw new Error('imdbId is required');
    }

    const safeRequest: RequestType = {
      ...request,
      imdbId: request.imdbId as string
    };

    const data = await fetchSubtitles(safeRequest);
    if (!Array.isArray(data)) {
      throw new Error('Unexpected response format');
    }

    console.log('Available languages:', data.map(sub => sub.ISO639));
    console.log('Requested languages:', languages);

    let filteredData = data;
    if (languages && languages.length > 0) {
      filteredData = data.filter((sub) => languages.includes(sub.ISO639));
    }

    if (request.format) {
      filteredData = filteredData.filter((sub) => {
        const format = sub.SubFormat.toLowerCase();
        return format === request.format!.toLowerCase();
      });
    }

    console.log('Available formats:', filteredData.map(sub => sub.SubFormat));

    const subtitles: ResponseType[] = filteredData.map((sub): ResponseType => ({
      id: sub.IDSubtitleFile,
      url: sub.SubDownloadLink.replace('.gz', '').replace('download/', 'download/subencoding-utf8/'),
      type: sub.SubFormat,
      display: getDisplayName(sub.ISO639),
      language: sub.ISO639,
      hasCorsRestrictions: false,
    }));

    return subtitles;

  } catch (error) {
    console.error('Error in search function:', error);
    return [];
  }
}
