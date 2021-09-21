import { Schema, model } from "mongoose";
import { Product } from "../type/document/Product_document";
import mongoose from "mongoose";
const ProductSchema = new Schema(
  {
    ProductName: { type: String },
    ProductType: { type: String },
    ProductPrice:{ type: Number}
  },
  { timestamps: true }
);

export const ProductsSchema = model<Product>("ProductSchema", ProductSchema);
