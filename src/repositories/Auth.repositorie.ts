import { UsersSchema } from '../models/User.model';
import { User } from '../type/document/User_document';
export class MainAuth {
  constructor() {}

  async getAuth(Userr: any) {
    return UsersSchema.findOne({email:Userr.email});
  }

}