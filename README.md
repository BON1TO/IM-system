# Inventory Management System

A full-stack Inventory Management Dashboard built using React (Vite) and Node.js (Express).

This application helps merchants manage products, track stock levels, identify low or out-of-stock items, and view basic inventory analytics.

Built as part of an engineering assignment to demonstrate full-stack development, product thinking, and clean implementation.

---

##  Features

### Product Management (CRUD)

- Add new products with:
  - Name
  - SKU
  - Price
  - Stock quantity
  - Minimum stock threshold
- Edit existing products
- Delete products (with confirmation)
- Color-coded stock status:
  - 🟢 In Stock
  - 🟡 Low Stock
  - 🔴 Out of Stock

---

## Screenshots

### Dashboard

![Dashboard](./screenshots/dashboard.png)

---

### Products Page

![Products](./screenshots/products.png)

---

### Add / Edit Product

![Add Product](./screenshots/add-product.png)

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash

git clone https://github.com/BON1TO/IM-system.git
cd IM-system

2. Backend Setup
cd server
npm install
node server.js
Backend runs on:
http://localhost:5000

3. Frontend Setup
Open new terminal:
cd client
npm install
npm run dev
Frontend runs on:
http://localhost:5173

📤 CSV Export :
You can download inventory CSV from:
http://localhost:5000/api/export/csv

