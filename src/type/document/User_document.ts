import { Document } from 'mongoose';
export interface User extends Document {
  _id:string;
  name:string;
  email:string;
  password:string;
  isAdmin:boolean;
  createdAt?: string;
  updatedAt?: string;
}