interface CategoryListProps {
  selectedCategory: string | null;
  handleCategoryChange: (category: string | null) => void;
  categories: string[] | undefined;
}

export default function CategoryList({
  selectedCategory,
  handleCategoryChange,
  categories,
}: CategoryListProps) {
  return (
    <ul className="space-y-2 px-4">
      <li
        className={`px-4 py-2 rounded-lg cursor-pointer transition duration-200
      ${
        !selectedCategory
          ? "font-bold text-primary-700 bg-gray-200"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }
    `}
        onClick={() => handleCategoryChange(null)}
      >
        All Products
      </li>
      {categories?.map((category) => (
        <li
          key={category}
          className={`px-4 py-2 rounded-lg cursor-pointer transition duration-200
        ${
          selectedCategory === category
            ? "font-bold text-primary-700 bg-gray-200"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
      `}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
