import { User } from "../type/document/User_document";
import { MainUser } from "../repositories/User.repositories";
import CustomeError from "../utills/error";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security} from "tsoa";
import { SaveUpdateResUser } from "../type/responses/User.response";
import {GetReqUser, SaveReqUser } from "../type/request/User.request";
@Route("User")
@Tags("User")
@Security("api_key")
export class UserController {
  constructor() {}
  @Post("/savenewuser")
  async saveuser(@Body() bus: SaveReqUser): Promise<SaveUpdateResUser> {
    const new_product: any = await new MainUser().saveUser(<User>bus);
    return <SaveUpdateResUser >new_product;
  }
  @Post("/getuser")
  async getuser(@Body() getreq: GetReqUser): Promise<SaveUpdateResUser > {
    const admin:any = await new MainUser().getUser(getreq.id);
    if (admin === null) throw new CustomeError(404, "User not found");
    return <SaveUpdateResUser >admin;
  }

}
