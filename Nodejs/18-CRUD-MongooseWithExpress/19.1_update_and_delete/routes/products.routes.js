import { Router } from "express";
import { deleteProduct, deleteAllProducts, updateProduct } from "../controllers/products.controller.js";


export const productsRouter = Router();

productsRouter.delete('/deleteProduct', deleteProduct);
productsRouter.delete('/deleteAllProducts', deleteAllProducts);

productsRouter.patch('/updateProduct', updateProduct);