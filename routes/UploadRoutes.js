const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "../upload/images",
    filename: (req, file, cb) => {
      return cb(
        null,
        `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
      );
    },
  });
  const upload = multer({ storage: storage });
  
  // Creating endpoint for upload images
  router.use("/images", express.static("../upload/images"));
  router.post("/", upload.single("product"), (req, res) => {
    res.json({
      success: 1,
      image_url: `http://localhost:4000/images/${req.file.filename}`,
    });
  });
  module.exports = router