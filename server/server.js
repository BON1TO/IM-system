const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const exportRoutes = require("./routes/exportRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/export", exportRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
