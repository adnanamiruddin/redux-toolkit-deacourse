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
    <div className="w-1/2 flex flex-col rounded-md shadow-sm">
      <label className="block mb-2 font-medium text-gray-900 dark:text-white">
        Sort Products by Alphabet
      </label>
      <div className="w-full flex">
        <button
          onClick={handleSortAsc}
          className="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Sort by A-Z
        </button>
        <button
          onClick={handleSortDesc}
          className="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Sort by Z-A
        </button>
      </div>
    </div>
  );
};

export default SortProductsByAlphabet;
