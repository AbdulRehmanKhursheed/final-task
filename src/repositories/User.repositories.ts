import { UsersSchema } from '../models/User.model';
import {User } from '../type/document/User_document';
export class MainUser {
  constructor() {}
//   getAdmin(_id: string) {
//     return ProductsSchema.findById(_id);
//   }
  async saveUser(Userr: User) {
    return new UsersSchema(Userr).save();
  }
  async getUser(Userr: string) {
    return  UsersSchema.find();
  }
}