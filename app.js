const fs = require("fs");
const express = require("express");

const app = express();

const products = JSON.parse(fs.readFileSync("./dev-data/products.json"));

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
};

const getProductByCategory = (req, res) => {
  console.log(req.params);
  const category = req.params.category;
  const productByCategory = products.find((item) => item.category === category);

  res.status(200).json({
    status: "success",
    data: {
      productByCategory,
    },
  });
};

const getProductById = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const product = products.find((item) => item.id === id);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

app.get("/api/vi/products", getAllProducts);
app.get("/api/vi/products/:category", getProductByCategory);
app.get("/api/vi/products/:id", getProductById);

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
