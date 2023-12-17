import { useDispatch } from "react-redux";
import {
  sortProductsByAlphabetAsc,
  sortProductsByAlphabetDesc,
} from "./productListSlice";

const SortProductsByAlphabet = () => {
  const dispatch = useDispatch();

  const handleSortAsc = () => {
    dispatch(sortProductsByAlphabetAsc());
  };

  const handleSortDesc = () => {
    dispatch(sortProductsByAlphabetDesc());
  };

  return (
    <div className="w-full flex flex-col rounded-md shadow-sm mt-4 md:mt-0">
      <label className="block mb-2 font-medium text-gray-900">
        Sort Products by Alphabet
      </label>
      <div className="w-full flex">
        <button
          onClick={handleSortAsc}
          className="w-1/2 px-4 py-2 text-sm font-medium text-teal-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-teal-700 focus:text-teal-700"
        >
          Sort by A-Z
        </button>
        <button
          onClick={handleSortDesc}
          className="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-2 focus:ring-teal-700 focus:text-teal-700"
        >
          Sort by Z-A
        </button>
      </div>
    </div>
  );
};

export default SortProductsByAlphabet;
