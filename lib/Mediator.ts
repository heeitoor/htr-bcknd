import { Handler } from "../core/Enums";
import { MockPostHandler } from "../core/handlers/MockHandler";
import { Dictionary } from "./Dictionary";

export interface IRequest<T extends any> {
  type: Handler;
  body: T;
}

export interface IResponse<T extends any> {
  data?: T;
}

export interface IHandler<TReq, TRes> {
  handle(request: TReq): IResponse<TRes>;
}

export interface IMediator {
  send<TReq, TRes>(request: IRequest<TReq>): IResponse<TRes>;
}

export class Mediator implements IMediator {
  handlers: Dictionary<string, IHandler<any, any>>;

  constructor() {
    this.handlers = new Dictionary<string, IHandler<any, any>>();
  }

  registerHandler() {}

  send<TReq extends any, TRes extends any>(
    request: IRequest<TReq>
  ): IResponse<TRes> {
    const handler = this.handlers.get(request.type.toString());
    return handler.value.handle(request.body);
  }
}
