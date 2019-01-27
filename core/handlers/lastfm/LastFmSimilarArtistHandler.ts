import { IHandler, IResponse } from "../../../lib/Mediator";
import { SimilarArtistRequest } from "../../requests/lastfm/SimilarArtistRequest";
import { SimilarArtistResponse } from "../../responses/lastfm/SimilarArtistResponse";
import { LastFmBusiness } from "../../business/LastFm";

export class LastFmSimilarArtistHandler implements IHandler<SimilarArtistRequest, SimilarArtistResponse[]> {
  constructor(private business: LastFmBusiness = new LastFmBusiness()) {}

  async handle(request: SimilarArtistRequest): Promise<SimilarArtistResponse[]> {
    const promise = new Promise<SimilarArtistResponse[]>(async (resolve, reject) => {
      resolve(await this.business.getSimilarArtists(request.name, request.limit));
    });
    return promise;
  }
}
