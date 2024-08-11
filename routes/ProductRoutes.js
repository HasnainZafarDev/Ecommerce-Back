const express = require("express");
const router = express.Router();

const {
  addProduct,
  removeProduct,
  getAllProducts,
  getWomenProducts,
  getNewCollection,
} = require("../controllers/ProductController");

router.post("/addproduct", addProduct);
router.post("/removeproduct", removeProduct);
router.get("/allproducts", getAllProducts);
router.get("/womenproducts", getWomenProducts);
router.get("/newcollection", getNewCollection);

module.exports = router;
