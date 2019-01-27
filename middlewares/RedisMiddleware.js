"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Global_1 = require("../Global");
class RedisMiddleware {
}
RedisMiddleware.definition = (request, response, next) => {
    console.log("start");
    Global_1._redis.start();
    next();
};
exports.RedisMiddleware = RedisMiddleware;
// const client = createClient({
//   port: 18973,
//   host: "redis-18973.c8.us-east-1-4.ec2.cloud.redislabs.com",
//   password: "C41AXTFwgtWW4p2M6Y9ubQNg5KHGP7Pd",
//   db: 0
// });
// client.on("error", x => {
//   console.log("Error " + x);
// });
// client.on("connect", x => {
//   console.log("connected");
//   client.set("htht", new Date().toString(), print);
// });
// client.set("ssid", "ade31fe5af", x => {
//   console.log(x);
// });
