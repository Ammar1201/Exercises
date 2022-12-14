import { Router } from "express";
import { usersRouter } from './user.routes.js';
import { tasksRouter } from "./tasks.routes.js";

export const indexRouter = Router();

indexRouter.use('/users', usersRouter);
indexRouter.use('/tasks', tasksRouter);