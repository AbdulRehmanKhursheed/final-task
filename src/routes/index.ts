import express from 'express';
import { ProductRoutesApi } from "./Product.Routes";
import { OrderRoutesApi } from "./Order.Routes";
import { UserRoutesApi } from "./User.Routes";
import { AuthRoutesApi } from "./Auth.Routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/product',ProductRoutesApi);
        this.router.use('/Order',OrderRoutesApi);
        this.router.use('/User',UserRoutesApi);
        this.router.use('/Login',AuthRoutesApi);
    }


}
export const MainApi = new MainRouter().router;