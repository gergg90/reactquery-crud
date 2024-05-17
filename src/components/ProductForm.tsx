import { createProduct } from "@/api/productsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function ProductForm() {
  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log("Successfull");
      queryClient.invalidateQueries("products");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    addProductMutation.mutate({
      ...product,
      inStock: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input className="text-slate-800" type="text" id="name" name="name" />

      <label htmlFor="description">Description</label>
      <input
        className="text-slate-800"
        type="text"
        id="description"
        name="description"
      />

      <label htmlFor="category">Category</label>
      <select className="text-slate-800" name="category" id="category">
        <option value="electronics">Electronic</option>
        <option value="textil">Textil</option>
        <option value="home">Home</option>
      </select>

      <label htmlFor="price">Price</label>
      <input className="text-slate-800" type="number" name="price" id="price" />

      <button>Add Product</button>
    </form>
  );
}

export default ProductForm;
