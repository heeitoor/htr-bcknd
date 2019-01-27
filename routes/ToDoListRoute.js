"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ToDoListRoute {
}
ToDoListRoute.prefix = "/todolist";
ToDoListRoute.definition = express_1.Router()
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
exports.ToDoListRoute = ToDoListRoute;
