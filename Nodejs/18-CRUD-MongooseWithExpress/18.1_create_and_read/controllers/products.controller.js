import { addProductToDB, getAllProductsFromDB, getSpecificProductsFromDB, getActiveProductsFromDB, getProductsByPriceFromDB } from "../services/products.service.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = await addProductToDB(req.body);
    res.status(201).send(newProduct);
  }
  catch (err) {
    res.status(409).send({ errorStatus: 409, errorMessage: err.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsFromDB();
    res.status(200).send(products);
  }
  catch (err) {
    res.status(404).send({ errorStatus: 404, errorMessage: err.message });
  }
};

export const getProduct = async (req, res) => {
  if (req.body.productID === undefined) {
    res.status(400).send({ errorStatus: 400, errorMessage: 'you must provide a product ID - productID' });
    return;
  }

  try {
    const products = await getSpecificProductsFromDB(req.body.productID);
    res.status(200).send(products);
  }
  catch (err) {
    res.status(404).send({ errorStatus: 404, errorMessage: err.message });
  }
};

export const getActiveProducts = async (req, res) => {
  try {
    const products = await getActiveProductsFromDB();
    res.status(200).send(products);
  }
  catch (err) {
    res.status(404).send({ errorStatus: 404, errorMessage: err.message });
  }
};

export const getProductsByPrice = async (req, res) => {
  const { min, max } = req.query;
  if (min === undefined || max === undefined) {
    res.status(400).send({ errorStatus: 400, errorMessage: 'you must provide minimum and maximum price' })
    return;
  }

  try {
    const products = await getProductsByPriceFromDB(min, max);
    res.status(200).send(products);
  }
  catch (err) {
    res.status(404).send({ errorStatus: 404, errorMessage: err.message });
  }
};