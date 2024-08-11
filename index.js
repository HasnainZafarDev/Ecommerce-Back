const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connection");

const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require('./routes/UploadRoutes')

const app = express();

connectDb();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use('/upload',uploadRoutes)

app.get("/", (req, res) => {
  res.send("Express App is running");
});

app.listen(4000, (error) => {
  if (!error) {
    console.log("Server is running on port : " + 4000);
  } else {
    console.log("Error : " + error);
  }
});
