import { IHandler } from "../../../lib/Mediator";
import { GetClassesRequest } from "../../requests/frekvens/GetClassesRequest";
import { GetClassesResponse } from "../../responses/frekvens/GetClassesResponse";
import { FrekvensBusiness } from "../../business/Frekvens";

export class GetClassesHandler implements IHandler<GetClassesRequest, GetClassesResponse> {
  handle(request: GetClassesRequest): Promise<GetClassesResponse> {
    const promise = new Promise<GetClassesResponse>(async (resolve, reject) => {
      resolve(new FrekvensBusiness().getClassesByTeacherId(request.teacherId));
    });

    return promise;
  }
}
