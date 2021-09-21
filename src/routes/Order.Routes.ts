import express from 'express';
import { OrderController } from '../controller/Order.controller';
import { ProductsSchema } from '../models/Product.model';
import { Order } from '../type/document/Order_document';
import { DeleteOrder, GetOrder, SaveOrder,SaveOrders, UpdateOrder} from '../type/request/Order.request';
import { SaveUpdateResOrder } from '../type/responses/Order.response';
import CustomeError from '../utills/error';
import { OrdersSchema } from '../models/Order.model';
const auth=require('../middleware/Auth_middleware');

export class OrderRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/saveneworder',auth, async (req, res, next) => {
      try {
        const email=res.locals.dataa.email
        const order: SaveOrders = req.body;
        order.User_email=email;
        const newOrder:any = await new OrderController().saveorder(order);
        res.status(200).json({
          message: newOrder
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getorder', async (req, res, next) => {
      try {
        const getreq:GetOrder = req.body;
          const admin:any = await new OrderController().getorder(getreq);
          res.send(admin);
      } catch (error) {
        next(res.send("Failed to get specified id's bus"));
      }
    });
    this.router.put('/updateorder', async (req, res, next) => {
      try {
        const product: UpdateOrder = req.body;
        const upadated_admin:any = await new OrderController().updateorder(product);
        const response = {
          upadated_admin,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deleteorder', async (req, res, next) => {
      try {
        const delreq:DeleteOrder = req.body;
        const Deleted_product = await new OrderController().deleteorder(delreq);
        res.status(200).json({
          message: 'Order successfully deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getorderslist',auth, async (req, res, next) => {
      try {
        const email=res.locals.dataa.email
        
        const productList: any = await new OrderController(email).getorderslist();
        res.status(200).json({
          result: productList
        });

      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getorderbill', async (req, res, next) => {
      try {
        const getreq:GetOrder = req.body;
          const Orderbill:any = await new OrderController().getorderbill(getreq);
          let sum=0;        //Check for the products in order and get their prices
          
          let value:number=0;
          for(let index=0;index<Orderbill.Product.length;index++){

            let convert=JSON.stringify(Orderbill.Product[index]._id)
            convert=convert.slice(1,-1)
            let strings=`${convert}`
            let product:any=await ProductsSchema.findById(strings)
            let midvalue=product.ProductPrice*Orderbill.Product[index].Product_quantity
            sum = sum+ midvalue
            sum = sum + Orderbill.Deleivery_charges
          }
           
           
          res.send(`Bill is ${sum}`);
      } catch (error) {
        next(res.send("Failed to get specified id's bus"));
      }
    });
}
}
export const OrderRoutesApi = new OrderRoutes().router;