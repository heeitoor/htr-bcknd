"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mediator_1 = require("./lib/Mediator");
const Redis_1 = require("./lib/Redis");
exports._mediator = new Mediator_1.Mediator();
exports._redis = new Redis_1.RedisConnection();
