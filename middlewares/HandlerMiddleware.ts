// import { MockPostHandler } from "../core/handlers/MockHandler";
import { _mediator } from "../Global";
import { Handler } from "../core/Enums";
import { LastFmArtistInfoHandler } from "../core/handlers/lastfm/LastFmArtistInfoHandler";
import { LastFmSimilarArtistHandler } from "../core/handlers/lastfm/LastFmSimilarArtistHandler";
import { GetClassesHandler } from "../core/handlers/frekvens/GetClassesHandler";
import { SaveAttendanceHandler } from "../core/handlers/frekvens/SaveAttendanceHandler";

export class HandlerMiddleware {
  static definition = (request: any, response: any, next: any) => {
    // _mediator.handlers.add(
    //   Handler.MockPostRequest.toString(),
    //   new MockPostHandler()
    // );
    _mediator.handlers.add(Handler.LastFmArtistInfoRequest.toString(), new LastFmArtistInfoHandler());
    _mediator.handlers.add(Handler.LastFmSimilarArtistRequest.toString(), new LastFmSimilarArtistHandler());
    _mediator.handlers.add(Handler.FrekvensGetClassesRequest.toString(), new GetClassesHandler());
    _mediator.handlers.add(Handler.FrekvensSaveAttendanceRequest.toString(), new SaveAttendanceHandler());
    next();
  };
}
