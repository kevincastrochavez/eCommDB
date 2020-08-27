const fs = require("fs");
const express = require("express");

const app = express();

const products = JSON.parse(fs.readFileSync("./dev-data/products.json"));

app.get("/api/vi/products", (req, res) => {
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

app.get("/api/vi/products/:id", (req, res) => {
  const id = req.params.id * 1;
  const product = products.find((item) => item.id === id);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
