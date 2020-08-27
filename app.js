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

const productRouter = express.Router();
const userRouter = express.Router();

productRouter.route("/").get(getAllProducts);
productRouter.route("/category/:category").get(getProductsByCategory);
productRouter.route("/:id").get(getProductById);

userRouter.route("/").post(createUser);
userRouter.route("/:id").patch(updateUser);

app.use("/api/v1/products", productRouter);
app.use("/api/vi/users", userRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
