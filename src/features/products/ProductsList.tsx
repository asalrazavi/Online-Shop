import { useSearchParams } from "react-router-dom";
import { Product, useGetProductsQuery } from "../../services/ProductsService";
import { useDispatch } from "react-redux";
import { addToCart } from "../../services/store";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || null;
  const dispatch = useDispatch();

  if (error) return <p>Error loading products</p>;

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const filteredProducts = selectedCategory
    ? products?.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="px-6 sm:px-10 md:px-16 py-14 flex flex-col justify-center items-center gap-y-12 mt-12">
      <h1 className="text-4xl font-extrabold text-gray-800">محصولات</h1>
      <ProductCard
        isLoading={isLoading}
        filteredProducts={filteredProducts}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}
