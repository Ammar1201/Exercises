import { Router } from "express";
import { moviesRouter } from "./movies.router.js";

export const indexRouter = Router();

indexRouter.use('/movies', moviesRouter);