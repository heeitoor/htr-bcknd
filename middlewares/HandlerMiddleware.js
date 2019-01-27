"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { MockPostHandler } from "../core/handlers/MockHandler";
const Global_1 = require("../Global");
const Enums_1 = require("../core/Enums");
const LastFmArtistInfoHandler_1 = require("../core/handlers/lastfm/LastFmArtistInfoHandler");
const LastFmSimilarArtistHandler_1 = require("../core/handlers/lastfm/LastFmSimilarArtistHandler");
const GetClassesHandler_1 = require("../core/handlers/frekvens/GetClassesHandler");
const SaveAttendanceHandler_1 = require("../core/handlers/frekvens/SaveAttendanceHandler");
class HandlerMiddleware {
}
HandlerMiddleware.definition = (request, response, next) => {
    // _mediator.handlers.add(
    //   Handler.MockPostRequest.toString(),
    //   new MockPostHandler()
    // );
    Global_1._mediator.handlers.add(Enums_1.Handler.LastFmArtistInfoRequest.toString(), new LastFmArtistInfoHandler_1.LastFmArtistInfoHandler());
    Global_1._mediator.handlers.add(Enums_1.Handler.LastFmSimilarArtistRequest.toString(), new LastFmSimilarArtistHandler_1.LastFmSimilarArtistHandler());
    Global_1._mediator.handlers.add(Enums_1.Handler.FrekvensGetClassesRequest.toString(), new GetClassesHandler_1.GetClassesHandler());
    Global_1._mediator.handlers.add(Enums_1.Handler.FrekvensSaveAttendanceRequest.toString(), new SaveAttendanceHandler_1.SaveAttendanceHandler());
    next();
};
exports.HandlerMiddleware = HandlerMiddleware;
