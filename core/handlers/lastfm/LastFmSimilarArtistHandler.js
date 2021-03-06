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
const LastFm_1 = require("../../business/LastFm");
class LastFmSimilarArtistHandler {
    constructor(business = new LastFm_1.LastFmBusiness()) {
        this.business = business;
    }
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                resolve(yield this.business.getSimilarArtists(request.name, request.limit));
            }));
            return promise;
        });
    }
}
exports.LastFmSimilarArtistHandler = LastFmSimilarArtistHandler;
