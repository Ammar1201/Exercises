import { Router } from "express";
import { addProduct, getAllProducts, getProduct, getActiveProducts, getProductsByPrice } from "../controllers/products.controller.js";


export const productsRouter = Router();

productsRouter.post('', addProduct);

productsRouter.get('', getAllProducts);
productsRouter.get('/product', getProduct);
productsRouter.get('/active', getActiveProducts);
productsRouter.get('/filter/price', getProductsByPrice);