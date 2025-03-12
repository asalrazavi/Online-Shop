import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../services/ProductsService";

export default function ProductDetails() {
  const { id } = useParams();
  const {
    isLoading,
    data: product,
    error,
  } = useGetSingleProductQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;
  if (!product) return <p>No product found</p>;

  console.log(product);

  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-64 h-64 object-contain"
      />
      <p className="text-lg font-medium">${product.price}</p>
      <p className="text-lg font-medium">{product.category}</p>
      <p className="text-sm font-light w-[40%] text-center">
        {product.description}
      </p>
    </div>
  );
}
