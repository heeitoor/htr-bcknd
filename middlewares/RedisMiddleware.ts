import { print, createClient } from "redis";
import { _redis } from "../Global";

export class RedisMiddleware {
  static definition = (request: any, response: any, next: any) => {
    console.log("start");
    _redis.start();
    next();
  };
}

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
