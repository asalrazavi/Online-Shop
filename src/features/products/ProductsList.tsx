import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../../services/ProductsService";

export default function ProductsList() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || null;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  console.log(products);

  const filteredProducts = selectedCategory
    ? products?.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="px-20 py-14 flex flex-col justify-center items-center gap-y-20 mt-20">
      <h1 className="text-3xl font-bold text-secondary-700">Products</h1>
      <div className="grid grid-cols-5 gap-2">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
            className="border-2 border-secondary-400 py-5 px-3 rounded-xl text-left flex flex-col items-center gap-y-2 cursor-pointer"
          >
            <div className="w-[208px] h-[200px]">
              <img
                src={product.images[0]}
                alt="image"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-medium text-lg self-end">${product.price}</p>
            <p className="font-semibold text-2xl self-end">{product.title}</p>
            <button className="bg-primary-700 text-secondary-0 rounded-xl bottom-0 mt-auto w-full flex items-center justify-center py-2 font-bold text-lg">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
