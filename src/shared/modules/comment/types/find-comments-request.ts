import { Request } from "express";
import { ParamOfferId } from "../../offer/index.js";

export type FindCommentsRequest = Request<ParamOfferId>
