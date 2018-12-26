import express, { Router } from "express";
import { MockRoute } from "../routes/MockRoute";

export class RouteBundle {
  public static register(app: express.Application) {
    app.use(MockRoute.definition);
  }
}
