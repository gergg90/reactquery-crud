import { getProducts } from "@/api/productsAPI";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";

function Products() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
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

      <Button>Delete</Button>
      <input type="checkbox" />
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
