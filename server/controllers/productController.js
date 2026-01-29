const { v4: uuidv4 } = require("uuid");
const products = require("../data/products");

// GET all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// GET product by id
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);

  if (!product) return res.status(404).json({ message: "Not found" });

  res.json(product);
};


// CREATE product
exports.createProduct = (req, res) => {
  const { name, sku, price, stock, minStock } = req.body;

  if (!name || !sku) {
    return res.status(400).json({ message: "Name and SKU required" });
  }

  if (price < 0) {
    return res.status(400).json({ message: "Price cannot be negative" });
  }

  const product = {
    id: uuidv4(),
    name,
    sku,
    price,
    stock,
    minStock,
  };

  products.push(product);

  res.status(201).json(product);
};

// UPDATE product
exports.updateProduct = (req, res) => {
  const product = products.find(p => p.id === req.params.id);

  if (!product) return res.status(404).json({ message: "Not found" });

  Object.assign(product, req.body);

  res.json(product);
};

// DELETE product
exports.deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);

  if (index === -1) return res.status(404).json({ message: "Not found" });

  products.splice(index, 1);
  res.json({ message: "Deleted" });
};
