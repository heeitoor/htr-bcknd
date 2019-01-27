"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionary_1 = require("./Dictionary");
class Mediator {
    constructor() {
        this.handlers = new Dictionary_1.Dictionary();
    }
    send(request) {
        const handler = this.handlers.get(request.type.toString());
        console.log(request);
        console.log(handler);
        console.log(request.type);
        return handler.value.handle(request.body);
    }
}
exports.Mediator = Mediator;
