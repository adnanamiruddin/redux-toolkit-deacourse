/* eslint-disable react/prop-types */
import { FaStar, FaCartPlus } from "react-icons/fa";
import ProductCategory from "./ProductCategory";

const showRatingStarts = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="text-yellow-300" />);
  }
  return stars;
};

const ProductItem = ({ product, handleClickAddToCart }) => {
  return (
    <div className="group w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <div className="relative w-[80%] h-[350px] mx-auto overflow-hidden p-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="px-5 pb-5 flex-grow">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <ProductCategory category={product.category} />

        <div className="flex items-center mt-3.5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {showRatingStarts(product.rating.rate)}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating.count}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pb-4 px-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        <button
          type="button"
          onClick={() => handleClickAddToCart(product)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
          <FaCartPlus className="inline-block ms-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
