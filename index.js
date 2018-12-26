"use strict";
// var http = require("http");
// var express = require('express');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// var app = express().
// http
//   .createServer((req, res) => {
//     res.end("dfsdf");
//   })
//   .listen(process.env.PORT || 3500);
var express_1 = __importDefault(require("express"));
var Router_1 = require("./lib/Router");
var body_parser_1 = require("body-parser");
var HandlerMiddleware_1 = require("./middlewares/HandlerMiddleware");
var app = express_1.default();
app.use(body_parser_1.json());
app.use(HandlerMiddleware_1.HandlerMiddleware.definition);
Router_1.RouteBundle.register(app);
app.listen(process.env.PORT || 3500);
