import { Mediator } from "./lib/Mediator";
import { RedisConnection } from "./lib/Redis";

export const _mediator: Mediator = new Mediator();
export const _redis: RedisConnection = new RedisConnection();
