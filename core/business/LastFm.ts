import { LastFmArtistInfoResponse } from "../responses/lastfm/ArtistInfoResponse";
import axios from "axios";
import { LastFmConfig } from "../models/Common";
import _ from "lodash";
import { text } from "body-parser";
import { LastFmArtistBase } from "../models/LastFm";
import { SimilarArtistResponse } from "../responses/lastfm/SimilarArtistResponse";

export class LastFmBusiness {
  private config: LastFmConfig;

  constructor() {
    let baseUrl = "http://ws.audioscrobbler.com/2.0/?format=json";
    baseUrl += "&api_key=" + (process.env.LSTFMKEY || "48896d75f92edae8c8086540054fbce4");
    this.config = {
      baseUrl: baseUrl
    };
  }

  async getArtistInfo(name: string): Promise<LastFmArtistInfoResponse> {
    const url = this.config.baseUrl + "&method=artist.getinfo&artist=" + name;

    const stage = await axios.get(url);

    const result: LastFmArtistInfoResponse = {
      id: stage.data.artist.mbid,
      name: stage.data.artist.name,
      summary: stage.data.artist.bio.summary,
      image: stage.data.artist.image[stage.data.artist.image.length - 1]["#text"],
      onTour: stage.data.artist.ontour != "0",
      tags: _.map(stage.data.artist.tags.tag, item => {
        return {
          name: item.name
        };
      }),
      url: stage.data.artist.url
    };

    return result;
  }

  async getSimilarArtists(name: string, limit?: number): Promise<SimilarArtistResponse[]> {
    let url = this.config.baseUrl + "&method=artist.getsimilar&artist=" + name;

    if (limit) {
      url += "&limit=" + limit;
    }

    const stage = await axios.get(url);

    const result = _.map(
      _.filter(stage.data.similarartists.artist, item => {
        return item.mbid != undefined;
      }),
      item => {
        const temp: LastFmArtistBase = {
          id: item.mbid,
          name: item.name,
          image: item.image[item.image.length - 1]["#text"],
          url: item.url
        };

        return temp;
      }
    );

    return result;
  }
}
