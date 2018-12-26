"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = [];
    }
    Dictionary.prototype.add = function (key, value) {
        this.items.push({
            key: key,
            value: value
        });
        return this.items.length;
    };
    Dictionary.prototype.get = function (key) {
        return _.find(this.items, { key: key });
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
