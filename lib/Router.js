"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LastFmRouter_1 = require("../routes/LastFmRouter");
const FrekvensRouter_1 = require("../routes/FrekvensRouter");
class RouteBundle {
    static register(app) {
        app.use(LastFmRouter_1.LastFmRoute.definition);
        app.use(FrekvensRouter_1.FrekvensRoute.definition);
    }
}
exports.RouteBundle = RouteBundle;
