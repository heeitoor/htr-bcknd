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
var redis_1 = require("redis");
var client = redis_1.createClient({
    port: 18973,
    host: "redis-18973.c8.us-east-1-4.ec2.cloud.redislabs.com",
    password: "C41AXTFwgtWW4p2M6Y9ubQNg5KHGP7Pd",
    db: 0
});
client.on("error", function (x) {
    console.log("Error " + x);
});
client.on("connect", function (x) {
    console.log("connected");
    client.set("htht", new Date().toString(), redis_1.print);
});
// client.set("ssid", "ade31fe5af", x => {
//   console.log(x);
// });
var app = express_1.default();
app.use(body_parser_1.json());
app.use(HandlerMiddleware_1.HandlerMiddleware.definition);
app.use("/param", function (req, res) {
    res.send(process.env.TEST || "didn't work");
});
app.use("/redis", function (req, res) {
    client.get("htht", function (e, r) {
        res.send(r);
    });
});
Router_1.RouteBundle.register(app);
app.listen(process.env.PORT || 3500);
