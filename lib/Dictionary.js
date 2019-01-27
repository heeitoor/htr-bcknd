"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
class Dictionary {
    constructor() {
        this.items = [];
    }
    add(key, value) {
        this.items.push({
            key: key,
            value: value
        });
        return this.items.length;
    }
    get(key) {
        return _.find(this.items, { key: key });
    }
}
exports.Dictionary = Dictionary;
