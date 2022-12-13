import { Product } from "../models/product.models.js";

export const deleteProductFromDB = async (productID) => {
  return await Product.findByIdAndDelete(productID);
};

export const deleteAllProductsFromDB = async () => {
  return await Product.deleteMany({});
};

export const updateProductToDB = async (product) => {
  const productToUpdate = await Product.findOne({ _id: product.productID });
  if (!productToUpdate) throw new Error(`Product with the ID: ${product.productID} not found!`);
  const { description, imgs, phoneNumber, dateAdded, price, discount } = productToUpdate.details;
  const productDetails = { description, imgs, phoneNumber, dateAdded, price };
  const newDiscount = product.discount || discount;
  return await Product.findByIdAndUpdate(product.productID, { isActive: product.isActive, details: { ...productDetails, discount: newDiscount } }, { new: true, runValidators: true });
};