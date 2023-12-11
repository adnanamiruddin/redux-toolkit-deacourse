import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductsByTitle } from "./productListSlice";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import FilterProducts from "./FilterProducts";

const SearchProducts = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleInputKeywords = (e) => {
    setSearchInput(e.target.value);
    dispatch(searchProductsByTitle(e.target.value));
  };

  const handleClearInput = () => {
    setSearchInput("");
    dispatch(searchProductsByTitle(""));
  };

  return (
    <div className="flex">
      <div className="w-3/6 md:hidden">
        <FilterProducts />
      </div>

      <div className="relative w-full">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputKeywords}
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 md:bg-orange-50 rounded-e-lg md:rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search product by title..."
        />
        {searchInput ? (
          <span
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-auto cursor-pointer"
            onClick={handleClearInput}
          >
            <IoCloseOutline className="text-gray-500 text-2xl hover:bg-gray-100 hover:rounded-lg" />
          </span>
        ) : (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3.5  ">
            <IoSearchOutline className="text-gray-500 text-2xl" />
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchProducts;
