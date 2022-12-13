import { Router } from "express";
import { getProduct } from "../middlewares/products.middlewear.js";
import { deleteProduct, deleteAllProducts, updateProduct } from "../controllers/products.controller.js";


export const productsRouter = Router();

productsRouter.delete('/deleteProduct', getProduct, deleteProduct);
productsRouter.delete('/deleteAllProducts', deleteAllProducts);

productsRouter.patch('/updateProduct', getProduct, updateProduct);