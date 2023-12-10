import { useDispatch } from "react-redux";
import {
  sortProductsByHighestPrice,
  sortProductsByLowestPrice,
} from "./productListSlice";

const SortProductsByPrice = () => {
  const dispatch = useDispatch();

  const handleSortFromHighest = () => {
    dispatch(sortProductsByHighestPrice());
  };

  const handleSortFromLowest = () => {
    dispatch(sortProductsByLowestPrice());
  };

  return (
    <div className="md:w-1/2 w-full flex flex-col rounded-md shadow-sm">
      <label className="block mb-2 font-medium text-gray-900 dark:text-white">
        Sort Products by Price
      </label>
      <div className="w-full flex">
        <button
          onClick={handleSortFromHighest}
          className="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Highest
        </button>
        <button
          onClick={handleSortFromLowest}
          className="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Lowest
        </button>
      </div>
    </div>
  );
};

export default SortProductsByPrice;
