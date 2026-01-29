import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  const load = () => {
    API.get("/products").then(res => setProducts(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async id => {
    if (!window.confirm("Delete product?")) return;
    await API.delete(`/products/${id}`);
    load();
  };

  const processed = products
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p => {
  const stock = Number(p.stock);
  const min = Number(p.minStock);

  if (filter === "in") return stock > min;
  if (filter === "low") return stock <= min && stock > 0;
  if (filter === "out") return stock === 0;
  return true;
})

    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "price") return a.price - b.price;
      if (sort === "stock") return a.stock - b.stock;
      return 0;
    });

  return (
    <div className="container">

      {/* TOPBAR */}
      <div className="topbar">
        <h1>Products</h1>

        <Link to="/add">
          <button className="primary">Add Product</button>
        </Link>
      </div>

      {/* CONTROLS */}
      <div className="controls">
        <input
          placeholder="Search products"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="in">In Stock</option>
          <option value="low">Low Stock</option>
          <option value="out">Out of Stock</option>
        </select>

        <select onChange={e => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="low-stock-card">

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {processed.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.sku}</td>
                <td>{p.price}</td>
                <td style={{
  color: (() => {
    const stock = Number(p.stock);
    const min = Number(p.minStock);

    if (stock === 0) return "red";
    if (stock <= min) return "orange";
    return "lightgreen";
  })()
}}>

                  {p.stock}
                </td>

                <td>
                  <Link to={`/edit/${p.id}`}>
                    <button>Edit</button>
                  </Link>{" "}
                  <button onClick={() => remove(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <Link to="/" className="back-btn">Back to Dashboard</Link>

    </div>
  );
}
