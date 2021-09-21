import { Schema, model } from "mongoose";
import { Order } from "../type/document/Order_document";
import mongoose from "mongoose";
const OrderSchema = new Schema(
  {
    User_email:{type:String},
    Product: [{
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      ref: "ProductSchema",
      },
      Product_quantity:{type:Number},
    }],
    Deleivery_address:{
      type:String,
    },
    User_contact_number:{
      type:String,
    },
    Deleivery_charges:{
      type:Number,
    },
  },
  { timestamps: true }
);

export const OrdersSchema = model<Order>("OrderSchema", OrderSchema);
