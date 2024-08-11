const Users = require("../models/UserModel");
const jwt = require('jsonwebtoken')
// Creating User
const createUser = async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res
        .status(400)
        .json({ success: false, errors: "User Already Exists" });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });
    await user.save();
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token: token });
  };

  // Login User
  const loginUser = async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      const passCompare = req.body.password === user.password;
      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        res.json({ success: true, token: token });
      } else {
        res.json({ success: false, error: "Invalid Password" });
      }
    } else {
      res.json({ success: false, error: "Wrong Email Id" });
    }
  }
  module.exports = { createUser,loginUser };
  