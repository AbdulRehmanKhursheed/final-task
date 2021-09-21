import express from 'express';
import { ProductController } from '../controller/Product.controller';
import { Product } from '../type/document/Product_document';
import { DeleteProduct, GetProduct, SaveProduct, UpdateProduct } from '../type/request/Product.request';
import { SaveUpdateResProduct } from '../type/responses/Product.response';
import CustomeError from '../utills/error';
const admin=require('../middleware/Admin_middleware');
export class ProductRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/savenewproduct', async (req, res, next) => {
      try {
        const product: SaveProduct = req.body;
        const newProduct:SaveUpdateResProduct = await new ProductController().saveproduct(product);
        res.status(200).json({
          message: newProduct
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getproduct',admin, async (req, res, next) => {
      try {
        const getreq:GetProduct = req.body;
          const admin:SaveUpdateResProduct = await new ProductController().getproduct(getreq);
          res.send(admin);
      } catch (error) {
        next(res.send("Failed to get specified id's bus"));
      }
    });
    this.router.put('/updateproduct', async (req, res, next) => {
      try {
        const product: UpdateProduct = req.body;
        const upadated_admin:SaveUpdateResProduct = await new ProductController().updateproduct(product);
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
    this.router.delete('/deleteproduct', async (req, res, next) => {
      try {
        const delreq:DeleteProduct = req.body;
        const Deleted_product = await new ProductController().deleteproduct(delreq);
        res.status(200).json({
          message: 'Product successfully deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getproductslist', async (req, res, next) => {
      try {
        const productList: SaveUpdateResProduct[] = await new ProductController().getproductslist();
        res.status(200).json({
          result: productList
        });

      } catch (error) {
        next(error);
      }
    });
    
  
}
}
export const ProductRoutesApi = new ProductRoutes().router;