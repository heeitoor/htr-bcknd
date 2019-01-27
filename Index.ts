import express from "express";
import { RouteBundle } from "./lib/Router";
import { json } from "body-parser";
import { HandlerMiddleware } from "./middlewares/HandlerMiddleware";
//import { RedisMiddleware } from "./middlewares/RedisMiddleware";
import he from "http";
import io from "socket.io";
import cors from 'cors';

const app: express.Application = express();
const http = he.createServer(app);

//const sckt = io(http).emit("some event", { for: "everyone" });

app.use(json());

// app.get("/", function(req: any, res: any) {
//   res.sendFile(__dirname + "/client/index.html");
// });
//app.use(express.static("client"));

//app.use(RedisMiddleware.definition);
app.use(HandlerMiddleware.definition);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(cors());
 
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

RouteBundle.register(app);

http.listen(process.env.PORT || 3500);
