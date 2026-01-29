const express = require("express");
const router = express.Router();
const { Parser } = require("json2csv");
const products = require("../data/products");

router.get("/csv", (req, res) => {
  const fields = ["name", "sku", "price", "stock", "minStock"];
  const parser = new Parser({ fields });

  const csv = parser.parse(products);

  res.header("Content-Type", "text/csv");
  res.attachment("inventory.csv");
  res.send(csv);
});

module.exports = router;
