// var http = require("http");
// var express = require('express');

// var app = express().

// http
//   .createServer((req, res) => {
//     res.end("dfsdf");
//   })
//   .listen(process.env.PORT || 3500);

import express from "express";
import { RouteBundle } from "./lib/Router";
import { json } from "body-parser";
import { HandlerMiddleware } from "./middlewares/HandlerMiddleware";
import { print, createClient } from "redis";

const client = createClient({
  port: 18973,
  host: "redis-18973.c8.us-east-1-4.ec2.cloud.redislabs.com",
  password: "C41AXTFwgtWW4p2M6Y9ubQNg5KHGP7Pd",
  db: 0
});

client.on("error", x => {
  console.log("Error " + x);
});

client.on("connect", x => {
  console.log("connected");
  client.set("htht", new Date().toString(), print);
});

// client.set("ssid", "ade31fe5af", x => {
//   console.log(x);
// });

const app: express.Application = express();

app.use(json());

app.use(HandlerMiddleware.definition);

app.use("/param", (req, res) => {
  res.send(process.env.TEST || "didn't work");
});

app.use("/redis", (req, res) => {
  client.get("htht", (e, r) => {
    res.send(r);
  });
});

RouteBundle.register(app);

app.listen(process.env.PORT || 3500);
