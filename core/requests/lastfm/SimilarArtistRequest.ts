import { LastFmArtistInfoRequest } from "./ArtistInfoRequest";

export interface SimilarArtistRequest extends LastFmArtistInfoRequest {
  limit: number;
}
