import { Router } from "express";
import { getAllMovies, getMovie, addMovie, updateMovie, deleteMovie } from "../controllers/movies.controller.js";

export const moviesRouter = Router();

moviesRouter.get('', getAllMovies);
moviesRouter.get('/:id', getMovie);

moviesRouter.post('', addMovie);

moviesRouter.put('/:id', updateMovie);

moviesRouter.delete('/:id', deleteMovie);