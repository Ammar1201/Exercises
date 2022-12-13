import { deleteAllProductsFromDB } from "../services/products.service.js";

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await res.product.remove();
    res.status(200).send(deletedProduct);
  }
  catch (err) {
    res.status(404).send({ errorStatus: 404, errorMessage: err.message });
  }
};

export const deleteAllProducts = async (req, res) => {
  try {
    const deletedProducts = await deleteAllProductsFromDB();
    res.status(200).send(deletedProducts);
  }
  catch (err) {
    res.status(404).send({ errorStatus: 404, errorMessage: err.message });
  }
};

export const updateProduct = async (req, res) => {
  if (req.body.isActive !== undefined) {
    res.product.isActive = req.body.isActive;
  }

  if (req.body.discount !== undefined) {
    res.product.details.discount = req.body.discount;
  }

  try {
    const updateProduct = await res.product.save();
    res.status(200).send(updateProduct);
  }
  catch (err) {
    res.status(400).send({ message: err.message });
  }
};