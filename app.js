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

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
