import express from 'express';
import { UserController } from '../controller/User.controller';
import { Product } from '../type/document/Product_document';
import { GetReqUser, SaveReqUser } from '../type/request/User.request';
import { SaveUpdateResUser } from '../type/responses/User.response';
import CustomeError from '../utills/error';

export class UserRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/savenewuser', async (req, res, next) => {
      try {
        const product: SaveReqUser = req.body;
        const newProduct:SaveUpdateResUser = await new UserController().saveuser(product);
        res.status(200).json({
          message: newProduct
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getuser', async (req, res, next) => {
      try {
          
        const getreq:GetReqUser = req.body;
          const admin:SaveUpdateResUser = await new UserController().getuser(getreq);
          res.send(admin);
      } catch (error) {
        next(res.send("Failed to get specified id's user"));
      }
    });

    
  
}
}
export const UserRoutesApi = new UserRoutes().router;