import { Router } from "express";
import { getProduct } from "../middlewares/products.middleware.js";
import { addProduct, getAllProducts, getProductReq, getActiveProducts, getProductsByPrice } from "../controllers/products.controller.js";


export const productsRouter = Router();

productsRouter.post('', addProduct);

productsRouter.get('', getAllProducts);
productsRouter.get('/product', getProduct, getProductReq);
productsRouter.get('/active', getActiveProducts);
productsRouter.get('/filter/price', getProductsByPrice);