import { Router } from "express";
import { Handler } from "../core/Enums";
import { _mediator } from "../Global";
import { GetClassesRequest } from "../core/requests/frekvens/GetClassesRequest";
import { GetClassesResponse } from "../core/responses/frekvens/GetClassesResponse";
import { SaveAttendanceRequest } from "../core/requests/frekvens/SaveAttendanceRequest";
import { SaveAttendanceResponse } from "../core/responses/frekvens/SaveAttendanceResponse";
import { MongoClient } from "mongodb";
import { User } from "../core/models/Frekvens";

export class FrekvensRoute {
  private static prefix: string = "/frekvens";

  static definition: Router = Router()
    .get(FrekvensRoute.prefix + "/class/:teacherId", async (req, res) => {
      res.send(
        await _mediator.send<GetClassesRequest, GetClassesResponse>({
          body: {
            teacherId: req.params.teacherId
          },
          type: Handler.FrekvensGetClassesRequest
        })
      );
    })
    .get(FrekvensRoute.prefix + "/student", async (req, res) => {})
    .post(FrekvensRoute.prefix + "/user", async (req, res) => {
      const mongoClient = new MongoClient(
        "mongodb://heroku_hz7348t9:mc8oaj44u60kadnfssvtmdst3c@ds113749.mlab.com:13749/heroku_hz7348t9",
        { useNewUrlParser: true }
      );

      const d = await mongoClient.connect();

      const db = d.db();

      const r = await db.collection("user").findOne<User>({ userName: req.body.userName });

      if (!r) {
        res.send({
          error: true
        });
        return;
      }

      res.send(r);
    })
    .post(FrekvensRoute.prefix + "/attendance", async (req, res) => {
      res.send(
        await _mediator.send<SaveAttendanceRequest, SaveAttendanceResponse>({
          body: {
            id: req.body.id,
            date: req.body.date,
            teacherId: req.body.teacherId,
            attendances: req.body.attendances
          },
          type: Handler.FrekvensSaveAttendanceRequest
        })
      );
    });
  // .get(FrekvensRoute.prefix + "/classroom", async (req, res) => {
  //   //   const result = await _mediator.send<LastFmArtistInfoRequest, LastFmArtistInfoResponse>({
  //   //     type: Handler.LastFmArtistInfoRequest,
  //   //     body: {
  //   //       name: req.query.name
  //   //     }
  //   //   });
  //   //   res.send(result);
  // })
  // .post(FrekvensRoute.prefix + "/classroom", async (req, res) => {})
  // .put(FrekvensRoute.prefix + "/classroom", async (req, res) => {});
}
