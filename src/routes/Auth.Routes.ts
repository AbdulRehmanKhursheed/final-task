import express from "express";
const config=require('config');
const jwt=require('jsonwebtoken')
import { AuthController } from "../controller/Auth.controller";
import { User} from "../type/document/User_document";
import { getReqAuth } from "../type/request/Auth.request";
import { SaveUpdateResUser } from "../type/responses/User.response";
import CustomeError from "../utills/error";
const bcrypt = require("bcrypt");
export class AuthRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post("/getauth", async (req, res, next) => {
      try {
        const newUser: any = await new AuthController().getauthuser( req.body );
        if (newUser) {
          console.log(newUser["isAdmin"]);
          
          const token=jwt.sign({_id:newUser._id, admin: newUser.isAdmin ,email: newUser.email}, '[jwtPrivateKey]');
          res.header('x-auth-token',token)
          res.status(200).json({
          message: newUser,
        });
         
        }
        else{
          return res.status(400).send("Invalid emails or password");
         } 
      } catch (error) {
        next(error);
      }
    });
  }
}
export const AuthRoutesApi = new AuthRoutes().router;
