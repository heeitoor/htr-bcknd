"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MockPostHandler = /** @class */ (function () {
    function MockPostHandler() {
    }
    MockPostHandler.prototype.handle = function (request) {
        return {
            data: {
                p: "Pong!",
                result: request
            }
        };
    };
    return MockPostHandler;
}());
exports.MockPostHandler = MockPostHandler;
