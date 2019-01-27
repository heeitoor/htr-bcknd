import { Router } from "express";
import { Handler } from "../core/Enums";
import { _mediator } from "../Global";
import { LastFmArtistInfoRequest } from "../core/requests/lastfm/ArtistInfoRequest";
import { LastFmArtistInfoResponse } from "../core/responses/lastfm/ArtistInfoResponse";
import { SimilarArtistRequest } from "../core/requests/lastfm/SimilarArtistRequest";
import { SimilarArtistResponse } from "../core/responses/lastfm/SimilarArtistResponse";

export class LastFmRoute {
  private static prefix: string = "/lastfm";

  static definition: Router = Router()
    .get(LastFmRoute.prefix + "/artist/info", async (req, res) => {
      const result = await _mediator.send<LastFmArtistInfoRequest, LastFmArtistInfoResponse>({
        type: Handler.LastFmArtistInfoRequest,
        body: {
          name: req.query.name
        }
      });

      res.send(result);
    })
    .get(LastFmRoute.prefix + "/artist/similar", async (req, res) => {
      const result = await _mediator.send<SimilarArtistRequest, SimilarArtistResponse>({
        type: Handler.LastFmSimilarArtistRequest,
        body: {
          limit: req.query.limit,
          name: req.query.name
        }
      });

      res.send(result);
    });
}
