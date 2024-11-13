/** @format */

export interface RequestType {
  imdbId?: string;
  tmdbId?: string;
  season?: number;
  episode?: number;
  language?: string; // ISO639 locale
  format?: string; // subtitle format (srt, ass, vtt)
}

export interface ResponseType {
  id: string;
  url: string;
  flagUrl: string;
  format: string; // subtitle format (srt, ass, vtt)
  media: string; // The name / title of the media
  display: string; // Full lang (ex: English)
  language: string; // ISO639 locale
  isHearingImpaired: boolean;
}

// JSON parsing types
export interface Subtitle {
  ISO639: string;
  LanguageName: string;
  SubHearingImpaired: string;
  IDSubtitleFile: string;
  SubFormat: string;
  MovieName: string;
  SubDownloadLink: string;
}

export interface SubtitleInput {
  ISO639?: unknown;
  LanguageName?: unknown;
  SubHearingImpaired?: unknown;
  IDSubtitleFile?: unknown;
  SubFormat?: unknown;
  MovieName?: unknown;
  SubDownloadLink?: unknown;
}
