import { RequestType, ResponseType } from "@/utils/types";
import { languageToCountryCode } from "./lookup";
import { H3Event } from "h3";

export async function search(
  event: H3Event,
  request: RequestType,
  languages?: string[],
): Promise<ResponseType[]> {
  try {
    if (!request.imdbId) {
      if (request.tmdbId) {
        const mediaType = request.season !== undefined ? "tv" : "movie";
        request.imdbId = await convertTmdbToImdb(event, request.tmdbId, mediaType);
      } else {
        throw new Error("imdbId is required");
      }
    }

    const safeRequest: RequestType = {
      ...request,
      imdbId: request.imdbId as string,
    };

    const data = await fetchSubtitles(event, safeRequest);

    const subtitles: ResponseType[] = [];
    for (const sub of data) {
      const languageMatch = !languages || languages.length === 0 || languages.includes(sub.ISO639);
      const formatMatch =
        !request.format || sub.SubFormat.toLowerCase() === request.format.toLowerCase();
      if (languageMatch && formatMatch) {
        const countryCode = languageToCountryCode[sub.ISO639] || sub.ISO639.toUpperCase();
        subtitles.push({
          id: sub.IDSubtitleFile,
          url: sub.SubDownloadLink.replace(".gz", "").replace(
            "download/",
            "download/subencoding-utf8/",
          ),
          flagUrl: `https://flagsapi.com/${countryCode}/flat/24.png`,
          type: sub.SubFormat,
          display: sub.LanguageName,
          language: sub.ISO639,
          isHearingImpaired: sub.SubHearingImpaired === "1" ? true : false,
        });
      }
    }

    return subtitles;
  } catch (error) {
    throw new Error("Error in search function:", error);
  }
}
