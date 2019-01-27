"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Enums_1 = require("../core/Enums");
const Global_1 = require("../Global");
class LastFmRoute {
}
LastFmRoute.prefix = "/lastfm";
LastFmRoute.definition = express_1.Router()
    .get(LastFmRoute.prefix + "/artist/info", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield Global_1._mediator.send({
        type: Enums_1.Handler.LastFmArtistInfoRequest,
        body: {
            name: req.query.name
        }
    });
    res.send(result);
}))
    .get(LastFmRoute.prefix + "/artist/similar", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield Global_1._mediator.send({
        type: Enums_1.Handler.LastFmSimilarArtistRequest,
        body: {
            limit: req.query.limit,
            name: req.query.name
        }
    });
    res.send(result);
}));
exports.LastFmRoute = LastFmRoute;
