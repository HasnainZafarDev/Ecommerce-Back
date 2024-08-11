const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const {
  addToCart,
  removeFromCart,
  getCartData,
} = require("../controllers/CartController");
const router = express.Router();

router.post("/addtocart", fetchUser, addToCart);
router.post("/removefromcart", fetchUser, removeFromCart);
router.post("/getcart", fetchUser, getCartData);

module.exports = router;
