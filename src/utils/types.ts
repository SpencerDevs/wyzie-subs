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
  type: string; // subtitle format (srt, ass, vtt)
  display: string; // Full lang (ex: English)
  language: string; // ISO639 locale
  hasCorsRestrictions: boolean;
}
