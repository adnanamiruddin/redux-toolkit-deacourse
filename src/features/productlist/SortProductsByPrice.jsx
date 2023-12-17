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
    <div className="w-full flex flex-col rounded-md shadow-sm">
      <label className="block mb-2 font-medium text-gray-900">
        Sort Products by Price
      </label>
      <div className="w-full flex">
        <button
          onClick={handleSortFromHighest}
          className="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-2 focus:ring-teal-700 focus:text-teal-700"
        >
          Highest
        </button>
        <button
          onClick={handleSortFromLowest}
          className="w-1/2 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-teal-700 focus:z-10 focus:ring-2 focus:ring-teal-700 focus:text-teal-700"
        >
          Lowest
        </button>
      </div>
    </div>
  );
};

export default SortProductsByPrice;
