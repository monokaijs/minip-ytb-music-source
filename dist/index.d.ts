import { MusicSource } from "./types/source";
declare class YouTubeSource implements MusicSource {
    id: string;
    name: string;
    version: string;
    initialize(): Promise<void>;
    search(query: string, pageToken: string | undefined, type?: 'web' | 'music'): Promise<import("./types/music").SearchResponse>;
    getPlayableUrl(trackId: string): Promise<string>;
    getSuggestions(trackId: string, type?: 'web' | 'music', size?: number): Promise<import("./types/music").Track[]>;
    getPlaylists(): Promise<import("node_modules/youtubei.js/dist/src/parser/helpers").ObservedArray<import("node_modules/youtubei.js/dist/src/parser/nodes").GridPlaylist | import("node_modules/youtubei.js/dist/src/parser/nodes").LockupView | import("node_modules/youtubei.js/dist/src/parser/nodes").Playlist>>;
    getPlaylist(playlistId: string): Promise<import("node_modules/youtubei.js/dist/src/parser/ytmusic").Playlist>;
    getSearchSuggestions(query: string): Promise<string[]>;
}
declare const defaultSource: YouTubeSource;
export default defaultSource;
export declare const createSource: () => YouTubeSource;
