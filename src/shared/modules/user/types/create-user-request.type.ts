import { Request } from "express";
import { RequestParams, ResponseBody } from "../../../libs/rest/index.js";
import { CreateUserDto } from "../dto/create-user.dto.js";

export type CreateUserRequest = Request<RequestParams, ResponseBody, CreateUserDto>;
