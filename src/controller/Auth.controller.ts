import { User } from '../type/document/User_document';
import { MainAuth} from '../repositories/Auth.repositorie';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { getReqAuth} from '../type/request/Auth.request';
@Route('Login')
@Tags('Login')
export class AuthController {
  constructor() { }
  @Post('/getauth')
  async getauthuser(@Body() user: {email: string, password:string}): Promise<getReqAuth> {
    const admin = await new MainAuth().getAuth(user);
    if (admin === null) throw new CustomeError(400, 'Invalid email or password');
    return <getReqAuth>admin; 
  }
}