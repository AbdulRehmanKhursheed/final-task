import { Document } from 'mongoose';
export interface Product extends Document {
  _id:string;
  ProductName:  string ;
  ProductType: string;
  ProductPrice: number;
  createdAt?: string;
  updatedAt?: string;
}