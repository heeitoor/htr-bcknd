import { RedisClient, createClient, ClientOpts } from "redis";

export class RedisConnection {
  //private client: RedisClient | undefined;
  private client: RedisClient | undefined;

  constructor() {}

  public start() {
    this.client = createClient(this.getClientOpts()).on(
      "connect",
      (error, what) => {
        console.log("connected");
      }
    );
  }

  public getClient(): RedisClient | undefined {
    return this.client;
  }

  private getClientOpts(): ClientOpts {
    const rdsPort = process.env.RDS_PORT || 18973;
    const rdsHost =
      process.env.RDS_HOST ||
      "redis-18973.c8.us-east-1-4.ec2.cloud.redislabs.com";
    const rdsPass = process.env.RDS_PASS || "C41AXTFwgtWW4p2M6Y9ubQNg5KHGP7Pd";
    const rdsDb = process.env.RDS_DB || 0;

    return {
      port: parseInt(rdsPort.toString()),
      host: rdsHost,
      password: rdsPass,
      db: rdsDb
    };
  }
}
