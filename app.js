const express = require("express");
const morgan = require("morgan");

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/vi/users", userRouter);

module.exports = app;
