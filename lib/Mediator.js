"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("./Dictionary");
var Mediator = /** @class */ (function () {
    //handlers: IHandler<any, any>[] = [];
    function Mediator() {
        this.handlers = new Dictionary_1.Dictionary();
    }
    Mediator.prototype.registerHandler = function () { };
    Mediator.prototype.send = function (request) {
        // console.log(typeof this.handlers[0]);
        // console.log(this.handlers[0] instanceof MockPostHandler);
        var handler = this.handlers.get(request.type.toString());
        return handler.value.handle(request.body);
        // switch (request.type) {
        //   case Handler.MockPostRequest:
        //     break;
        // }
        // return this.handlers[0].handle(request.body);
    };
    return Mediator;
}());
exports.Mediator = Mediator;
