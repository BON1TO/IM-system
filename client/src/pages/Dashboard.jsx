import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/analytics").then(res => setStats(res.data));
  }, []);

  if (!stats) return null;

  return (
    <div className="container">

      {/* TOP BAR */}
      <div className="topbar">
        <h1>Inventory Dashboard</h1>

        <div className="topbar-actions">
          <a href="http://localhost:5000/api/export/csv">
            <button className="primary">Download CSV</button>
          </a>

          <Link to="/products">
            <button>Products</button>
          </Link>
        </div>
      </div>

      {/* CARDS */}
      <div className="card-grid">
        <Card title="Products" value={stats.totalProducts} />
        <Card title="Inventory Value" value={stats.totalInventoryValue} />
        <Card title="Low Stock" value={stats.lowStockCount} />
        <Card title="Out of Stock" value={stats.outOfStockCount} />
      </div>

      {/* LOW STOCK */}
      <div className="low-stock-card">
        <h3>Low Stock Alerts</h3>

        {stats.lowStockItems.length === 0 && (
          <p className="empty">Everything looks good 🎉</p>
        )}

        {stats.lowStockItems.map(p => (
          <div key={p.id}>
            {p.name} ({p.stock})
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}
