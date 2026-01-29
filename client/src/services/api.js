import axios from "axios";

const API = axios.create({
  baseURL: "https://im-system-6hdu.onrender.com/api",
});

export default API;
