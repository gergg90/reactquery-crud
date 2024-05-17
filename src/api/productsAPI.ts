import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:8000/",
});

export const getProducts = async () => {
  const res = await productsApi.get("/products");
  return res.data;
};
