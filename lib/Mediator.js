"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("./Dictionary");
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.handlers = new Dictionary_1.Dictionary();
    }
    Mediator.prototype.registerHandler = function () { };
    Mediator.prototype.send = function (request) {
        var handler = this.handlers.get(request.type.toString());
        return handler.value.handle(request.body);
    };
    return Mediator;
}());
exports.Mediator = Mediator;
