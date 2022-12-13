import { addProductToDB, getAllProductsFromDB, getSpecificProductsFromDB, getActiveProductsFromDB, getProductsByPriceFromDB } from "../services/products.services.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = await addProductToDB(req.body);
    res.status(201).send(newProduct);
  }
  catch (err) {
    res.status(400).send({ errorStatus: 400, errorMessage: err.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsFromDB();
    res.status(201).send(products);
  }
  catch (err) {
    res.status(400).send({ errorStatus: 400, errorMessage: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    if (req.body.productID === undefined) throw new Error('you must provide a product ID - productID');
    const products = await getSpecificProductsFromDB(req.body.productID);
    res.status(201).send(products);
  }
  catch (err) {
    res.status(400).send({ errorStatus: 400, errorMessage: err.message });
  }
};

export const getActiveProducts = async (req, res) => {
  try {
    const products = await getActiveProductsFromDB(req.body.productID);
    res.status(201).send(products);
  }
  catch (err) {
    res.status(400).send({ errorStatus: 400, errorMessage: err.message });
  }
};

export const getProductsByPrice = async (req, res) => {
  try {
    const { min, max } = req.query;
    if (min === undefined || max === undefined) throw new Error('you must provide minimum and maximum price');
    const products = await getProductsByPriceFromDB(min, max);
    res.status(201).send(products);
  }
  catch (err) {
    res.status(400).send({ errorStatus: 400, errorMessage: err.message });
  }
};