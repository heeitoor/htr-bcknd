import { GetClassesResponse } from "../responses/frekvens/GetClassesResponse";
//const MongoClient = require("mongodb").MongoClient;
import { MongoClient } from "mongodb";
import { Class } from "../models/Frekvens";
import { SaveAttendanceResponse } from "../responses/frekvens/SaveAttendanceResponse";
import { SaveAttendanceRequest } from "../requests/frekvens/SaveAttendanceRequest";

//FRKVNSMNG
export class FrekvensBusiness {
  async getClassesByTeacherId(teacherId: number): Promise<GetClassesResponse> {
    const mongoClient = new MongoClient(
      "mongodb://heroku_hz7348t9:mc8oaj44u60kadnfssvtmdst3c@ds113749.mlab.com:13749/heroku_hz7348t9",
      { useNewUrlParser: true }
    );

    const d = await mongoClient.connect();

    const db = d.db();

    return new Promise<GetClassesResponse>(async (resolve, reject) => {
      resolve({
        classes: await db
          .collection("class")
          .find<Class>()
          .toArray()
      });
    });
  }

  async saveAttendance(request: SaveAttendanceRequest): Promise<SaveAttendanceResponse> {
    const mongoClient = new MongoClient(
      "mongodb://heroku_hz7348t9:mc8oaj44u60kadnfssvtmdst3c@ds113749.mlab.com:13749/heroku_hz7348t9",
      { useNewUrlParser: true }
    );

    const d = await mongoClient.connect();

    const db = d.db();

    return new Promise<SaveAttendanceResponse>(async (resolve, reject) => {
      const r = await db.collection("attendance").insertOne(request);
      console.log(r);
      resolve({
        status: true
      });
    });
  }
}
