import { Router } from "express";
import { MockPostRequest } from "../core/requests/MockRequest";
import { MockPostResponse } from "../core/responses/MockResponse";
import { Handler } from "../core/Enums";
import { _mediator } from "../Global";

export class MockRoute {
  private static prefix: string = "/mock";

  static definition: Router = Router()
    .get(MockRoute.prefix, (req, res) => {
      res.send(req.url);
    })
    .post(MockRoute.prefix, (req, res) => {
      const request = { type: Handler.MockPostRequest, body: req.body };

      const response = _mediator.send<MockPostRequest, MockPostResponse>(
        request
      );

      res.send(req.body);
    });
}
