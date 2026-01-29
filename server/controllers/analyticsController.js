const products = require("../data/products");

exports.getAnalytics = (req, res) => {
  let totalInventoryValue = 0;
  let lowStockItems = [];
  let outOfStockCount = 0;

  products.forEach(p => {
    const stock = Number(p.stock);
    const min = Number(p.minStock);
    const price = Number(p.price);

    totalInventoryValue += price * stock;

    if (stock === 0) outOfStockCount++;

    if (stock <= min && stock > 0) {
      lowStockItems.push(p);
    }
  });

  res.json({
    totalProducts: products.length,
    totalInventoryValue,
    lowStockCount: lowStockItems.length,
    outOfStockCount,
    lowStockItems
  });
};
