import { Schema, model } from "mongoose";
import { User } from "../type/document/User_document";
import mongoose from "mongoose";
const UserSchema = new Schema(
  {
    name:{
        type: String,
        required: true,
        minlength:5,
        maxlength:50
  
      },
      email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
      },
      password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024
      },
      isAdmin:{
          type: Boolean,
          default:false
      }
  },
  { timestamps: true }
);

export const UsersSchema = model<User>("UserSchema", UserSchema);
