import { SaveAttendanceRequest } from "../../requests/frekvens/SaveAttendanceRequest";
import { SaveAttendanceResponse } from "../../responses/frekvens/SaveAttendanceResponse";
import { IHandler } from "../../../lib/Mediator";
import { FrekvensBusiness } from "../../business/Frekvens";

export class SaveAttendanceHandler implements IHandler<SaveAttendanceRequest, SaveAttendanceResponse> {
  handle(request: SaveAttendanceRequest): Promise<SaveAttendanceResponse> {
    const promise = new Promise<SaveAttendanceResponse>(async (resolve, reject) => {
      resolve(await new FrekvensBusiness().saveAttendance(request));
    });
    return promise;
  }
}
