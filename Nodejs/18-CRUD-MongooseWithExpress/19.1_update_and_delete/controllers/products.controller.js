import { deleteProductFromDB, deleteAllProductsFromDB, updateProductToDB } from "../services/products.service.js";

export const deleteProduct = async (req, res) => {
  if (req.body.productID === undefined) {
    res.status(400).send({ errorStatus: 400, errorMessage: 'you must provide a product ID - productID' });
    return;
  }

  try {
    const deletedProduct = await deleteProductFromDB(req.body.productID);
    if (!deletedProduct) {
      res.status(404).send({ errorStatus: 404, errorMessage: 'productID not found!' });
      return;
    }
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

const isUpdatingAllowed = (fieldsToUpdate) => {
  const updates = Object.keys(fieldsToUpdate);

  const isIsActiveIncluded = updates.includes('isActive');
  const isDiscountIncluded = updates.includes('discount');

  if (isIsActiveIncluded && isDiscountIncluded) {
    return true;
  }

  if (isDiscountIncluded && !isIsActiveIncluded) {
    return true;
  }

  if (isIsActiveIncluded && !isDiscountIncluded) {
    return true;
  }

  return false;
}

export const updateProduct = async (req, res) => {

  const productToUpdate = req.body;
  if (productToUpdate.productID === undefined) {
    res.status(400).send({ errorStatus: 400, errorMessage: 'you must provide a product ID - productID' });
    return;
  }

  if (!isUpdatingAllowed(req.body)) {
    res.status(400).send({ errorStatus: 400, errorMessage: 'Invalid Updates' });
    return;
  }

  try {
    const updatedProduct = await updateProductToDB(productToUpdate);
    if (!updatedProduct) {
      res.status(404).send({ errorStatus: 404, errorMessage: 'productID not found!' });
      return;
    }
    res.status(200).send(updatedProduct);
  }
  catch (err) {
    res.status(404).send({ errorStatus: 404, errorMessage: err.message });
  }
};