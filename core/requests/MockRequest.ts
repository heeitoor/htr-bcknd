import { IRequest } from "../../lib/MEdiator";
import { Handler } from "../Enums";
import { MockPostModel } from "../models/Mock";

export interface MockPostRequest {
  body: MockPostModel;
  //type: Handler;
}
