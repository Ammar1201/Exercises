import fs from 'fs';
import path from 'path';
import * as url from 'url';

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const moviesDBpath = path.join(__dirname, '../db/movies.json');

//* ---------------------utility functions---------------------
const loadMoviesFromDB = () => {
  try {
    return JSON.parse(fs.readFileSync(moviesDBpath).toString());
  }
  catch (err) {
    return [];
  }
};

const saveMovies = (movies) => {
  fs.writeFileSync(moviesDBpath, JSON.stringify(movies));
};

const findMovieByID = (id, movies) => {
  if (!movies) {
    const movies = loadMoviesFromDB();
    return movies.find(movie => movie.id === id);
  }
  return movies.find(movie => movie.id === id);
};

//* ---------------------GET functions---------------------
export const getAllMovies = (req, res) => {
  const movies = loadMoviesFromDB();
  res.status(200).send(movies);
};

export const getMovie = (req, res) => {
  const { id } = req.params;
  const movie = findMovieByID(id);
  if (!movie) {
    res.status(404).send('Movie with the specific id not found!');
    return;
  }
  res.status(200).send(movie);
};

//* ---------------------POST functions---------------------
export const addMovie = (req, res) => {
  const movies = loadMoviesFromDB();
  movies.push(req.body);
  saveMovies(movies);
  res.status(201).send(req.body);
};

//* ---------------------PUT functions---------------------
export const updateMovie = (req, res) => {
  const { id } = req.params;
  const movies = loadMoviesFromDB();
  const movie = findMovieByID(id, movies);
  const movieReqBody = req.body;
  if (!movie) {
    res.status(404).send('Movie with the specified ID not found!');
    return;
  }

  movie.name = movieReqBody.name || movie.name;
  movie.length = movieReqBody.length || movie.length;
  saveMovies(movies);

  res.status(200).send(movie);
};

//* ---------------------DELETE functions---------------------
export const deleteMovie = (req, res) => {
  const { id } = req.params;
  const movies = loadMoviesFromDB();
  const movie = findMovieByID(id, movies);
  if (!movie) {
    res.status(404).send('Movie with the specified ID not found!');
    return;
  }

  const moviesToKeep = movies.filter(movieToKeep => movieToKeep.id !== movie.id);
  saveMovies(moviesToKeep);

  res.status(200).send(movie);
};