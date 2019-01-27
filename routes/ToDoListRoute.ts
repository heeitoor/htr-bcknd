import { Router } from "express";
import { Handler } from "../core/Enums";
import { _mediator } from "../Global";

export class ToDoListRoute {
  private static prefix: string = "/todolist";

  static definition: Router = Router()
    .get(ToDoListRoute.prefix, (req, res) => {
      res.send(req.url);
    })
    .post(ToDoListRoute.prefix, (req, res) => {
    //   const request = { type: Handler.MockPostRequest, body: req.body };

    //   const response = _mediator.send<MockPostRequest, MockPostResponse>(
    //     request
    //   );

    //   res.send(req.body);
    });
}
