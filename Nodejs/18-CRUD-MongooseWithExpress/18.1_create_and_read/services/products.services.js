import { Product } from "../models/product.models.js";

export const addProductToDB = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

export const getAllProductsFromDB = async () => {
  return await Product.find({});
};

export const getSpecificProductsFromDB = async (productID) => {
  return await Product.findOne({ _id: productID });
};

export const getActiveProductsFromDB = async () => {
  return await Product.find({ isActive: true });
};

export const getProductsByPriceFromDB = async (min, max) => {
  const tmp = await Product.find({ "details.price": { $gte: min, $lte: max } });
  return tmp;
};