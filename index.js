const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Product = require("./product"); // Pastikan file "product.js" mengandung definisi skema produk
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb+srv://david:apaantuh11@pam.spi9mzl.mongodb.net/flutter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
  })
  
  app.get("/product", async (req, res) => {
    try {
      let data = await Product.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;