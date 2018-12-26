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

const app: express.Application = express();

app.use(json());

app.use(HandlerMiddleware.definition);

RouteBundle.register(app);

app.listen(process.env.PORT || 3500);
