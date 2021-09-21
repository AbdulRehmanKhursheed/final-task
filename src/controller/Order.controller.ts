import { Order } from "../type/document/Order_document";
import { OrderAdmin } from "../repositories/Order.repositorie";
import CustomeError from "../utills/error";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security, Request} from "tsoa";
import { SaveUpdateResOrder } from "../type/responses/Order.response";
import { DeleteOrder, GetOrder, SaveOrder, UpdateOrder } from "../type/request/Order.request";
@Route("Order")
@Tags("Order")
@Security("api_key")
export class OrderController {
    email :any
  constructor(email?:any) {
      this.email=email
  }
    /**
   *  @summary   You have to login first so your id will also be saved
   */
  @Post("/saveneworder")
  async saveorder(@Body() order: SaveOrder): Promise<SaveUpdateResOrder> {
    const new_product: any = await new OrderAdmin().saveOrder(<Order>order);
    return <SaveUpdateResOrder>new_product;
  }
  @Post("/getorder")
  async getorder(@Body() getreq: GetOrder): Promise<SaveUpdateResOrder> {
    const admin:any = await new OrderAdmin().getOrder(getreq.id);
    if (admin === null) throw new CustomeError(404, "order not found");
    return <SaveUpdateResOrder>admin;
  }
  @Put("/updateorder")
  async updateorder(
    @Body() product: UpdateOrder): Promise<SaveUpdateResOrder> {
    const update_product:any = await new OrderAdmin().updateOrder(product);
    if (update_product === null)
      throw new CustomeError(400, "Order details not  updated");
    return <SaveUpdateResOrder>update_product;
  }
  @Delete("/deleteorder")
  @SuccessResponse("200", "Order deleted")
  async deleteorder(@Body() delreq: DeleteOrder): Promise<any> {
    return await new OrderAdmin().deleteOrder(delreq.id);
  }
      /**
   *  @summary   User can only see his orders 
   */
  @Post("/getorderslist")
  async getorderslist(): Promise<SaveUpdateResOrder[]> {
    const admin: any[] = await new OrderAdmin().getOrderlist(this.email);
    return <SaveUpdateResOrder[]>admin;
  }
  @Post("/getorderbill")
  async getorderbill(@Body() getreq: GetOrder): Promise<SaveUpdateResOrder> {
    const admin:any = await new OrderAdmin().getOrder(getreq.id);
    if (admin === null) throw new CustomeError(404, "Bus not found");
    return <SaveUpdateResOrder>admin;
  }
}
