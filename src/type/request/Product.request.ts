export interface SaveProduct {
  ProductName: string;
  ProductType: string;
  ProductPrice: number;
}
export interface UpdateProduct {
  _id: string;
  ProductName: string;
  ProductType: string;
  ProductPrice: number;
}
export interface GetProduct {
  id: string;
}
export interface DeleteProduct {
  id: string;
}
