import { MockPostHandler } from "../core/handlers/MockHandler";
import { _mediator } from "../Global";
import { Handler } from "../core/Enums";

export class HandlerMiddleware {
  static definition = (request: any, response: any, next: any) => {
    _mediator.handlers.add(
      Handler.MockPostRequest.toString(),
      new MockPostHandler()
    );
    next();
  };
}
