const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

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

const getProductsByCategory = (req, res) => {
  console.log(req.params);
  const category = req.params.category;
  const productsByCategory = products.find(
    (item) => item.category === category
  );

  res.status(200).json({
    status: "success",
    data: {
      productsByCategory,
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

const createUser = (req, res, next) => {
  res.status(500).json({
    status: "success",
    message: "Not defined",
  });
  next();
};

const updateUser = (req, res, next) => {
  res.status(500).json({
    status: "success",
    message: "Not defined",
  });
  next();
};

app.route("/api/vi/products").get(getAllProducts);
app.route("/api/vi/products/category/:category").get(getProductsByCategory);
app.route("/api/vi/products/:id").get(getProductById);

app.route("/api/vi/users").post(createUser);
app.route("/api/vi/users/:id").patch(updateUser);

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
