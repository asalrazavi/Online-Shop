import { useNavigate } from "react-router-dom";
import { Product } from "../../services/ProductsService";
import ProductCardSkeleton from "../../skeleton/ProductCardSkeleton";

interface ProductCardProps {
  filteredProducts: Product[] | undefined;
  handleAddToCart: (
    event: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => void;
  isLoading: boolean;
}

export default function ProductCard({
  filteredProducts,
  handleAddToCart,
  isLoading,
}: ProductCardProps) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {isLoading
        ? Array(5)
            .fill(null)
            .map((_, i) => <ProductCardSkeleton key={i} />)
        : filteredProducts?.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className="border border-gray-300 bg-white shadow-lg hover:shadow-xl transition duration-300 py-6 px-4 rounded-xl flex flex-col items-center gap-y-3 cursor-pointer"
            >
              <div className="w-[208px] h-[200px] overflow-hidden rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="font-medium text-lg text-gray-700 self-end">
                ${product.price}
              </p>
              <p className="font-semibold text-xl text-gray-900 self-end">
                {product.title}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(e, product);
                }}
                className="bg-primary-700 hover:bg-primary-900 text-white rounded-lg w-full flex items-center justify-center py-2 font-bold text-lg transition duration-300 bottom-0 mt-auto"
              >
                افزودن به سبد خرید
              </button>
            </div>
          ))}
    </div>
  );
}
