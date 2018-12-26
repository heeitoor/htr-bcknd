"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Enums_1 = require("../core/Enums");
var Global_1 = require("../Global");
var MockRoute = /** @class */ (function () {
    function MockRoute() {
    }
    MockRoute.prefix = "/mock";
    MockRoute.definition = express_1.Router()
        .get(MockRoute.prefix, function (req, res) {
        res.send(req.url);
    })
        .post(MockRoute.prefix, function (req, res) {
        var request = { type: Enums_1.Handler.MockPostRequest, body: req.body };
        var response = Global_1._mediator.send(request);
        console.log(response);
        res.send(req.body);
    });
    return MockRoute;
}());
exports.MockRoute = MockRoute;
