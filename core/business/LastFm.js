"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
class LastFmBusiness {
    constructor() {
        let baseUrl = "http://ws.audioscrobbler.com/2.0/?format=json";
        baseUrl += "&api_key=" + (process.env.LSTFMKEY || "48896d75f92edae8c8086540054fbce4");
        this.config = {
            baseUrl: baseUrl
        };
    }
    getArtistInfo(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.config.baseUrl + "&method=artist.getinfo&artist=" + name;
            const stage = yield axios_1.default.get(url);
            const result = {
                id: stage.data.artist.mbid,
                name: stage.data.artist.name,
                summary: stage.data.artist.bio.summary,
                image: stage.data.artist.image[stage.data.artist.image.length - 1]["#text"],
                onTour: stage.data.artist.ontour != "0",
                tags: lodash_1.default.map(stage.data.artist.tags.tag, item => {
                    return {
                        name: item.name
                    };
                }),
                url: stage.data.artist.url
            };
            return result;
        });
    }
    getSimilarArtists(name, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.config.baseUrl + "&method=artist.getsimilar&artist=" + name;
            if (limit) {
                url += "&limit=" + limit;
            }
            const stage = yield axios_1.default.get(url);
            const result = lodash_1.default.map(lodash_1.default.filter(stage.data.similarartists.artist, item => {
                return item.mbid != undefined;
            }), item => {
                const temp = {
                    id: item.mbid,
                    name: item.name,
                    image: item.image[item.image.length - 1]["#text"],
                    url: item.url
                };
                return temp;
            });
            return result;
        });
    }
}
exports.LastFmBusiness = LastFmBusiness;
