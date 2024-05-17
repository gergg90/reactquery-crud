import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:8000/",
});

export const getProducts = async () => {
  const res = await productsApi.get("/products");
  return res.data;
};

export const createProduct = async (product) =>
  productsApi.post("/products", product);

export const editProduct = async (product) =>
  productsApi.patch(`/products/${product.id}`, product);

export const deleteProduct = async (id) =>
  productsApi.delete(`/products/${id}`);
