"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Router_1 = require("./lib/Router");
const body_parser_1 = require("body-parser");
const HandlerMiddleware_1 = require("./middlewares/HandlerMiddleware");
//import { RedisMiddleware } from "./middlewares/RedisMiddleware";
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const http = http_1.default.createServer(app);
//const sckt = io(http).emit("some event", { for: "everyone" });
app.use(body_parser_1.json());
// app.get("/", function(req: any, res: any) {
//   res.sendFile(__dirname + "/client/index.html");
// });
//app.use(express.static("client"));
//app.use(RedisMiddleware.definition);
app.use(HandlerMiddleware_1.HandlerMiddleware.definition);
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use(cors_1.default());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// sckt.on("connection", (socket: any) => {
//   socket.broadcast.emit("hi");
//   console.log("a user connected");
//   socket.on("disconnect", function() {
//     console.log("user disconnected");
//   });
//   socket.on("chat message", function(msg: any) {
//     sckt.emit("chat message", msg);
//   });
// });
// app.use("/param", (req, res) => {
//   res.send(process.env.TEST || "didn't work");
// });
// app.use("/redis", (req, res) => {
//   // client.get("htht", (e, r) => {
//   //   res.send(r);
//   // });
// });
Router_1.RouteBundle.register(app);
http.listen(process.env.PORT || 3500);
