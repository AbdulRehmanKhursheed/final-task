import { ProductsSchema } from '../models/Product.model';
import {Product } from '../type/document/Product_document';
export class ProductAdmin {
  constructor() {}
  getProduct(_id: string) {
    return ProductsSchema.findById(_id);
  }
  saveProduct(Saving_bus: Product) {
    return new ProductsSchema(Saving_bus).save();
  }
  updateProduct(Updating_product: Product) {
    return ProductsSchema.findByIdAndUpdate(
      Updating_product._id, 
      Updating_product, 
      {
      new: true
    });
  }
  deleteProduct(_id: string) {
    return ProductsSchema.findByIdAndDelete(_id);
  }
  getProductslist() {
   return ProductsSchema.find();
  }
 
}