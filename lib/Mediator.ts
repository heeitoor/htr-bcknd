import { Handler } from "../core/Enums";
import { Dictionary } from "./Dictionary";

export interface IRequest<T extends any> {
  type: Handler;
  body: T;
}

export interface IResponse<T extends any> {
  data?: T;
}

export interface IHandler<TReq, TRes> {
  handle(request: TReq): Promise<TRes>;
}

export interface IMediator {
  send<TReq, TRes>(request: IRequest<TReq>): Promise<TRes>;
}

export class Mediator implements IMediator {
  handlers: Dictionary<string, IHandler<any, any>>;

  constructor() {
    this.handlers = new Dictionary<string, IHandler<any, any>>();
  }

  send<TReq extends any, TRes extends any>(request: IRequest<TReq>): Promise<TRes> {
    const handler = this.handlers.get(request.type.toString());
    console.log(request)
    console.log(handler)
    console.log(request.type)
    return handler.value.handle(request.body);
  }
}
