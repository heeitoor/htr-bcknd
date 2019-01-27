import express, { Router } from "express";
import { LastFmRoute } from "../routes/LastFmRouter";
import { FrekvensRoute } from "../routes/FrekvensRouter";

export class RouteBundle {
  public static register(app: express.Application) {
    app.use(LastFmRoute.definition);
    app.use(FrekvensRoute.definition);
  }
}
