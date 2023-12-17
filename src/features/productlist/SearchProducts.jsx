import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProductsByTitle } from "./productListSlice";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

const SearchProducts = () => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();

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
      <div className="relative w-full">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputKeywords}
          className="block p-2.5 ps-3 w-full z-20 text-sm text-gray-900 bg-gray-50 md:bg-orange-50 rounded-s-lg md:rounded-lg border border-e-0 border-teal-600 focus:ring-teal-500 focus:border-teal-500"
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

      <div className="w-1/6 drawer-content md:hidden">
        <label htmlFor="sort_drawer">
          <div className="py-2 px-3 flex justify-center rounded-r-lg bg-teal-600 border border-teal-600 hover:cursor-pointer">
            <CiFilter className="text-white text-2xl" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default SearchProducts;
