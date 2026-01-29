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

### Dashboard Analytics

- Total products
- Total inventory value
- Low stock count
- Out of stock count
- Low stock alerts section

### Search, Filter, Sort

- Search by product name or SKU
- Filter by:
  - All
  - In Stock
  - Low Stock
  - Out of Stock
- Sort by:
  - Name
  - Price
  - Stock level

### Bonus

- CSV Export of inventory
- Clean modern UI dashboard

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

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- Custom CSS

### Backend
- Node.js
- Express

### Data Storage
- In-memory array (no database)

---

## 📂 Project Structure

