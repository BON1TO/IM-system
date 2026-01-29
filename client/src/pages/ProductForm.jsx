import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useParams, Link } from "react-router-dom";


export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    sku: "",
    price: "",
    stock: "",
    minStock: "",
  });

  useEffect(() => {
    if (id) API.get(`/products/${id}`).then(res => setForm(res.data));
  }, [id]);

  const submit = async e => {
    e.preventDefault();
    if (id) await API.put(`/products/${id}`, form);
    else await API.post("/products", form);
    navigate("/products");
  };

  return (
    <div className="container">
      <h1>{id ? "Edit" : "Add"} Product</h1>

      <form className="form" onSubmit={submit}>
        {Object.keys(form).map(k => (
          <input key={k} name={k} value={form[k]} placeholder={k} onChange={e => setForm({ ...form, [k]: e.target.value })} />
        ))}

        <button className="primary">{id ? "Update" : "Add"}</button>
      </form>
      <Link to="/products" className="back-btn">Back to Products</Link>

    </div>
  );
}
