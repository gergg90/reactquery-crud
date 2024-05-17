import { getProducts } from "@/api/productsAPI";
import { useQuery } from "@tanstack/react-query";

function Products() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const products = data.map((product) => {
    return (
      <li key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </li>
    );
  });

  return (
    <div>
      <h3>Products List:</h3>
      <ul>{products}</ul>
    </div>
  );
}

export default Products;
