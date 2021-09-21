import { Document } from 'mongoose';
export interface Order extends Document {
  _id:string;
  User_email:string;
  Product:object[]
  Deleivery_address:string
  User_contact_number: string,
  Deleivery_charges: number,
  createdAt?: string;
  updatedAt?: string;
}