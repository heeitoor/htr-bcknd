"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockHandler_1 = require("../core/handlers/MockHandler");
var Global_1 = require("../Global");
var Enums_1 = require("../core/Enums");
var HandlerMiddleware = /** @class */ (function () {
    function HandlerMiddleware() {
    }
    HandlerMiddleware.definition = function (request, response, next) {
        Global_1._mediator.handlers.add(Enums_1.Handler.MockPostRequest.toString(), new MockHandler_1.MockPostHandler());
        next();
    };
    return HandlerMiddleware;
}());
exports.HandlerMiddleware = HandlerMiddleware;
