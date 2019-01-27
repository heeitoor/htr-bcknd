import { IHandler, IResponse } from "../../../lib/Mediator";
import { LastFmArtistInfoRequest } from "../../requests/lastfm/ArtistInfoRequest";
import { LastFmArtistInfoResponse } from "../../responses/lastfm/ArtistInfoResponse";
import _ from "lodash";
import { LastFmBusiness } from "../../business/LastFm";

export class LastFmArtistInfoHandler implements IHandler<LastFmArtistInfoRequest, LastFmArtistInfoResponse> {
  constructor(private business: LastFmBusiness = new LastFmBusiness()) {}

  async handle(request: LastFmArtistInfoRequest): Promise<LastFmArtistInfoResponse> {
    const promise = new Promise<LastFmArtistInfoResponse>(async (resolve, reject) => {
      resolve(await this.business.getArtistInfo(request.name));
    });
    return promise;
  }
}
