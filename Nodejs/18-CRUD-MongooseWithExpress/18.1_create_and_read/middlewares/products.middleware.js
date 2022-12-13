import { Product } from "../models/product.models.js";

export const getProduct = async (req, res, next) => {
  let product;
  try {
    product = await Product.findById(req.body.productID);
    if (!product) {
      res.status(404).send({ message: 'productID not found!' });
      return;
    }
  }
  catch (err) {
    res.status(500).send({ message: err.message });
    return;
  }

  res.product = product;
  next();
};