import {SearchResponse, Track} from './music';

export interface MusicSource {
  id: string;
  name: string;
  version: string;

  initialize(): Promise<void>;
  search(query: string, pageToken?: string, type?: 'web' | 'music'): Promise<SearchResponse>;
  getPlayableUrl(trackId: string, source?: string): Promise<string>;
  getSuggestions(trackId: string, type?: 'web' | 'music', size?: number): Promise<Track[]>;
  getPlaylists?(): Promise<any[]>;
  getPlaylist?(playlistId: string): Promise<any>;
  getSearchSuggestions?(query: string): Promise<string[]>;
  getTopTracks?(): Promise<any>;
}

export interface SourceManifest {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  bundleUrl?: string;
  capabilities: SourceCapability[];
  icon?: string;
  homepage?: string;
  minAppVersion?: string;
}

export type SourceCapability = 'search' | 'stream' | 'playlists' | 'suggestions' | 'top-tracks';

