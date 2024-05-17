import { deleteProduct, editProduct, getProducts } from "@/api/productsAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";

function Products() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      console.log("Producto eliminado con exito");
      queryClient.invalidateQueries("products");
    },
  });

  const editStockProductMutation = useMutation({
    mutationFn: editProduct,
    onSuccess: () => {
      console.log("inStock product edit");

      queryClient.invalidateQueries("products");
    },
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const products = data.map((product) => (
    <li key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>
        {product.category} {product.price}
      </p>
      <img
        className="max-w-sm max-h-sm"
        src={product.image}
        alt={product.name}
      />

      <Button
        onClick={(e) => {
          e.preventDefault();
          deleteProductMutation.mutate(product.id);
        }}
      >
        Delete
      </Button>
      <input
        type="checkbox"
        checked={product.inStock}
        onChange={(e) => {
          e.preventDefault();
          editStockProductMutation.mutate({
            ...product,
            inStock: e.target.checked,
          });
        }}
      />
      <label htmlFor="">In Stock</label>
    </li>
  ));
  return (
    <div>
      <h3>Products List:</h3>
      <ul>{products}</ul>
    </div>
  );
}

export default Products;
