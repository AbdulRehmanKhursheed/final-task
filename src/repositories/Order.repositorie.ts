import { OrdersSchema } from '../models/Order.model';
import {Order } from '../type/document/Order_document';
export class OrderAdmin {
  constructor() {}
  getOrder(_id: string) {
    return OrdersSchema.findById(_id);
  }
  saveOrder(Saving_order: Order) {
    Saving_order.Deleivery_charges=100;
    return new OrdersSchema(Saving_order).save();
  }
  async updateOrder(Updating_product: any) {
    return await OrdersSchema.findByIdAndUpdate( Updating_product._id,  Updating_product, 
      {
      new: true
    });
  }
  deleteOrder(_id: string) {
    return OrdersSchema.findByIdAndDelete(_id);
  }
  getOrderlist(email:string) {
   return OrdersSchema.find({ "User_email":email });
  }
 
}