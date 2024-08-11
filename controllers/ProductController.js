// Adding Product
const Product = require("../models/ProductModel");
const addProduct = async (req, res) => {
  let products = await Product.find({});
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    image: req.body.image,
  });
  console.log(product);
  await product.save();
  console.log("saved");
  res.json({
    success: true,
    name: req.body.name,
  });
};
// Deleting
const removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({ success: true, name: req.body.name });
};
// Getting all Products
const getAllProducts = async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");
  res.send(products);
};
// Get Products Of Women Category
const getWomenProducts = async (req, res) => {
  let products = await Product.find({ category: "women" });
  console.log("womens fetched");
  res.send(products);
};
const getNewCollection = async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  console.log("new collection fetched");
  res.send(newCollection);
};

module.exports = {
  addProduct,
  removeProduct,
  getAllProducts,
  getWomenProducts,
  getNewCollection,
};
