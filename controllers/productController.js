const fs = require("fs");

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/dev-data/products.json`)
);

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
};

exports.getProductsByCategory = (req, res) => {
  console.log(req.params);
  const { category } = req.params;
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

exports.getProductById = (req, res) => {
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
