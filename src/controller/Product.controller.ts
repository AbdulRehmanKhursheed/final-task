import { Product } from "../type/document/Product_document";
import { ProductAdmin } from "../repositories/Product.repositorie";
import CustomeError from "../utills/error";
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security} from "tsoa";
import { SaveUpdateResProduct } from "../type/responses/Product.response";
import { DeleteProduct, GetProduct, SaveProduct, UpdateProduct } from "../type/request/Product.request";
@Route("Product")
@Tags("Product")
@Security("api_key")
export class ProductController {
  constructor() {}
  @Post("/savenewproduct")
  async saveproduct(@Body() bus: SaveProduct): Promise<SaveUpdateResProduct> {
    const new_product: any = await new ProductAdmin().saveProduct(<Product>bus);
    return <SaveUpdateResProduct>new_product;
  }
    /**
   *  @summary   Only admin can see particular product 
   */
  @Post("/getproduct")
 
  async getproduct(@Body() getreq: GetProduct): Promise<SaveUpdateResProduct> {
    const admin:any = await new ProductAdmin().getProduct(getreq.id);
    if (admin === null) throw new CustomeError(404, "Bus not found");
    return <SaveUpdateResProduct>admin;
  }
  @Put("/updateproduct")
  async updateproduct(
    @Body() product: UpdateProduct): Promise<SaveUpdateResProduct> {
    const update_product:any = await new ProductAdmin().updateProduct(<Product>product);
    if (update_product === null)
      throw new CustomeError(400, "Bus details not updated");
    return <SaveUpdateResProduct>update_product;
  }
  @Delete("/deleteproduct")
  @SuccessResponse("200", "Product deleted")
  async deleteproduct(@Body() delreq: DeleteProduct): Promise<any> {
    return await new ProductAdmin().deleteProduct(delreq.id);
  }
  @Post("/getproductslist")
  async getproductslist(): Promise<SaveUpdateResProduct[]> {
    const admin: any[] = await new ProductAdmin().getProductslist();
    return <SaveUpdateResProduct[]>admin;
  }
}
