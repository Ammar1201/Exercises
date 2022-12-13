import { Product } from "../models/product.models.js";

export const deleteAllProductsFromDB = async () => {
  return await Product.deleteMany({});
};