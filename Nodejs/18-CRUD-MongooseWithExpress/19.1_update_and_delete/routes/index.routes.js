import { Router } from "express";
import { productsRouter } from "./products.routes.js";

export const indexRouter = Router();

indexRouter.use('/products', productsRouter);