const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Product = require("./product"); // Pastikan file "product.js" mengandung definisi skema produk

app.use(cors());

// mongoose
//   .connect("mongodb+srv://david:apaantuh11@pam.spi9mzl.mongodb.net/flutter", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error.message);
//   });

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});



app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
