import { useDispatch } from "react-redux";
import { searchProductsByTitle } from "./productListSlice";
import { IoSearchOutline } from "react-icons/io5";
import FilterProducts from "./FilterProducts";

const SearchProducts = () => {
  const dispatch = useDispatch();

  const handleInputKeywords = (e) => {
    dispatch(searchProductsByTitle(e));
  };

  return (
    <div className="flex">
      <FilterProducts />

      <div className="relative w-full">
        <input
          type="text"
          onChange={(e) => handleInputKeywords(e.target.value)}
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search product by title..."
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
          <IoSearchOutline className="text-gray-500 dark:text-gray-300" />
        </span>
      </div>
    </div>
  );
};

export default SearchProducts;
