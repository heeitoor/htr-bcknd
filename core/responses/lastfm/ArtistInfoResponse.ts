import { LastFmTag, LastFmArtistBase } from "../../models/LastFm";

export interface LastFmArtistInfoResponse extends LastFmArtistBase {
  summary: string;
  onTour: boolean;
  tags: LastFmTag[];
}
