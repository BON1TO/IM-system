# Inventory Management System – Technical Documentation

## Introduction

This project is a full-stack Inventory Management System built as part of an engineering assignment.  
The goal was to design a simple yet functional dashboard that allows merchants to manage products, monitor stock levels, view inventory analytics, and prevent stockouts.

The system focuses on clean architecture, usability, and clear separation between frontend and backend responsibilities.

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- Custom CSS

### Backend
- Node.js
- Express

### Deployment
- Frontend: Vercel
- Backend: Render (free tier)

---

## Core Functionality

### Product Management

Merchants can:

- Create products with:
  - Name
  - SKU
  - Price
  - Current stock
  - Minimum stock threshold

- Edit any product field
- Delete products with confirmation
- View all products in a structured table

Stock status is visually represented:

- Green: Stock above minimum threshold  
- Yellow: Stock at or below minimum threshold  
- Red: Out of stock  

This helps merchants instantly identify critical inventory.

All product data is stored in memory on the backend using a simple JavaScript array, as allowed by the assignment.

---

## Dashboard Analytics

The dashboard provides a high-level overview of inventory:

- Total number of products
- Total inventory value (price × stock)
- Low stock count
- Out of stock count

Low stock alerts display products that have reached or fallen below their minimum stock level.

All analytics are calculated server-side to keep business logic centralized.

---

## Search, Filter and Sort

The Products page supports:

### Search
- By product name
- By SKU

### Filter
- All products
- In stock
- Low stock
- Out of stock

### Sort
- Name
- Price
- Stock quantity

These features allow merchants to quickly locate and organize inventory.

---

## CSV Export

Users can export the current inventory as a CSV file containing:

- Product name
- SKU
- Price
- Stock
- Status

This enables offline viewing or spreadsheet analysis.

CSV generation is handled on the backend.

---

## Backend Architecture

The backend follows a simple MVC-style structure:

- Routes define API endpoints
- Controllers contain business logic
- Data is stored in memory

Main endpoints:

GET /api/products  
POST /api/products  
PUT /api/products/:id  
DELETE /api/products/:id  

GET /api/analytics  
GET /api/export/csv  

Controllers are responsible for:

- Validation
- Inventory calculations
- Stock status evaluation
- CSV generation

UUIDs are used for product identification.

---

## Frontend Architecture

The frontend is organized into:

- Pages:
  - Dashboard
  - Products
  - ProductForm

- Services:
  - Axios API instance

Routing is handled using React Router.

Each page communicates with the backend via Axios.

Reusable components are used for dashboard cards and layout consistency.

The UI focuses on clarity, spacing, and ease of use rather than heavy design frameworks.

---

## Design Decisions

- In-memory storage was chosen for simplicity and faster development, matching assignment requirements.
- Analytics are computed on the backend to avoid duplicated logic.
- UI prioritizes readability and user experience.
- Render and Vercel were selected for quick deployment and public accessibility.

---

## Deployment Notes

The backend runs on Render’s free tier and may take up to ~30 seconds to wake up on first request.

If the application does not load immediately, refreshing after a few seconds resolves this.

---

## Potential Improvements

With more time, the system could be extended with:

- Database persistence
- Authentication
- Pagination
- Charts for analytics
- Role-based access
- Audit logs for stock changes

---

## Conclusion

This project demonstrates full-stack development fundamentals including REST APIs, frontend state management, deployment, and product-oriented design thinking.

The focus was on building a functional system that solves real merchant inventory problems while maintaining clean code and structure.
