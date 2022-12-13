import { addProductToDB, getAllProductsFromDB, getActiveProductsFromDB, getProductsByPriceFromDB } from "../services/products.service.js";

export const addProduct = async (req, res) => {
  try {
    const newProduct = await addProductToDB(req.body);
    res.status(201).send(newProduct);
  }
  catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsFromDB();
    res.status(200).send(products);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getProductReq = async (req, res) => {
  res.status(200).send(res.product);
};

export const getActiveProducts = async (req, res) => {
  try {
    const products = await getActiveProductsFromDB();
    res.status(200).send(products);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getProductsByPrice = async (req, res) => {
  const { min, max } = req.query;
  if (min === undefined || max === undefined) {
    res.status(400).send({ message: 'you must provide minimum and maximum price' })
    return;
  }

  try {
    const products = await getProductsByPriceFromDB(min, max);
    res.status(200).send(products);
  }
  catch (err) {
    res.status(500).send({ message: err.message });
  }
};