import { useSearchParams } from "react-router-dom";
import { useGetCategoriesQuery } from "../services/ProductsService";
import CategoryList from "../features/products/CategoryList";

export default function Sidebar() {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || null;

  console.log("Categories Data:", categories);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  const handleCategoryChange = (category: string | null) => {
    const newParams = new URLSearchParams();
    if (category) newParams.set("category", category);
    setSearchParams(newParams);
  };

  return (
    <aside className="w-64 border-l border-secondary-200 bg-white shadow-lg top-0 right-0 pt-20 overflow-y-auto row-span-2 row-start-1 h-full">
      <h2 className="text-lg font-semibold text-gray-700 px-4 mb-4 text-center">
        دسته بندی ها
      </h2>
      <CategoryList
        categories={categories}
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
    </aside>
  );
}
