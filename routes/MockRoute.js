"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Enums_1 = require("../core/Enums");
const Global_1 = require("../Global");
class MockRoute {
}
MockRoute.prefix = "/mock";
MockRoute.definition = express_1.Router()
    .get(MockRoute.prefix, (req, res) => {
    res.send(req.url);
})
    .post(MockRoute.prefix, (req, res) => {
    const request = { type: Enums_1.Handler.MockPostRequest, body: req.body };
    const response = Global_1._mediator.send(request);
    res.send(req.body);
});
exports.MockRoute = MockRoute;
