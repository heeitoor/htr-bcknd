"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockRoute_1 = require("../routes/MockRoute");
var RouteBundle = /** @class */ (function () {
    function RouteBundle() {
    }
    RouteBundle.register = function (app) {
        app.use(MockRoute_1.MockRoute.definition);
    };
    return RouteBundle;
}());
exports.RouteBundle = RouteBundle;
