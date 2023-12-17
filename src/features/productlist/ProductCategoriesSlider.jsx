import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductByCategory } from "./productListSlice";

const ProductCategoriesSlider = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="flex overflow-y-scroll gap-2">
        <button className="loading-button capi whitespace-nowrap px-4 py-2 text-sm font-medium text-teal-600 bg-white border rounded-lg border-teal-600 hover:text-white hover:border-lime-500 hover:bg-teal-600 relative">
          All
        </button>
        {[...Array(4)].map((_, i) => (
          <button
            key={i}
            className="loading-button capi whitespace-nowrap px-4 py-2 text-sm font-medium text-teal-600 bg-white border rounded-lg border-teal-600 hover:text-white hover:border-lime-500 hover:bg-teal-600 relative"
          >
            Loading...
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex overflow-y-scroll gap-2">
      <button
        onClick={() => dispatch(filterProductByCategory("all"))}
        className="capitalize px-4 py-2 text-sm font-medium text-teal-600 bg-white border rounded-lg border-teal-600 hover:text-white hover:border-white hover:bg-teal-600 focus:text-white focus:border-white focus:bg-teal-600"
      >
        All
      </button>
      {categories.map((category, i) => (
        <button
          key={i}
          onClick={() => dispatch(filterProductByCategory(category))}
          className="capitalize whitespace-nowrap px-4 py-2 text-sm font-medium text-teal-600 bg-white border rounded-lg border-teal-600 hover:text-white hover:border-lime-500 hover:bg-teal-600 focus:text-white focus:border-white focus:bg-teal-600"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductCategoriesSlider;
