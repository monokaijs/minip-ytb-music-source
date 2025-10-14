export type TrackSource = 'youtube' | 'youtube-music' | 'file';
export interface Track {
    id: string;
    title: string;
    artist: string;
    artwork: string;
    duration: number;
    url?: string;
    videoId: string;
    isOffline?: boolean;
    localPath?: string;
    addedAt: number;
    isLoading?: boolean;
    source?: TrackSource;
}
export interface Playlist {
    id: string;
    name: string;
    tracks: Track[];
    createdAt: number;
    updatedAt: number;
    isFavorite?: boolean;
}
export interface VideoSearchResult {
    id: string;
    title: string;
    artist: string;
    thumbnail: string;
    duration: number;
    viewCount?: string;
}
export interface SearchResponse {
    results: VideoSearchResult[];
    nextPageToken?: string;
}
export interface PlaybackState {
    isPlaying: boolean;
    position: number;
    duration: number;
}
