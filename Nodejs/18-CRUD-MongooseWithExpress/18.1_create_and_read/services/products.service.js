import { Product } from "../models/product.models.js";

export const addProductToDB = async (product) => {
  return await Product.create(product);;
};

export const getAllProductsFromDB = async () => {
  return await Product.find({});
};

export const getActiveProductsFromDB = async () => {
  return await Product.find({ isActive: true });
};

export const getProductsByPriceFromDB = async (min, max) => {
  return await Product.find({ "details.price": { $gte: min, $lte: max } });;
};