export interface SaveOrder {
    
    Product:Array<SingleOrderProduct>;
    Deleivery_address:string,
    User_contact_number: string
}
export interface SaveOrders {
    User_email:string;
    Product:Array<SingleOrderProduct>;
    Deleivery_address:string
    User_contact_number: string,
    Deleivery_charges: number,
}
export interface UpdateOrder {
  _id: string;
  Product:Array<SingleOrderProduct>;
}
export interface GetOrder {
  id: string;
}
export interface DeleteOrder {
  id: string;
}
interface SingleOrderProduct{
    _id: string;
    Product_quantity: number
}