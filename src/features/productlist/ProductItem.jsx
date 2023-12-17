/* eslint-disable react/prop-types */
import { FaStar, FaCartPlus } from "react-icons/fa";
import ProductCategory from "./ProductCategory";

const ProductItem = ({ product, handleClickAddToCart }) => {
  const showRatingStarts = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-yellow-300 text-xs" />);
    }
    return stars;
  };

  return (
    <div className="group w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col">
      <div className="relative w-[80%] h-[200px] mx-auto overflow-hidden p-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <ProductCategory category={product.category} />
      <div className="px-5 py-4 flex-grow">
        <h5 className="text-sm font-semibold tracking-tight text-gray-900">
          {product.title}
        </h5>

        <div className="flex items-center mt-2.5 gap-1.5">
          <div className="flex items-center space-x-0.5 rtl:space-x-reverse">
            {showRatingStarts(product.rating.rate)}
          </div>
          |
          <div className="text-gray-800 text-[11px] font-semibold">
            {product.rating.count} Reviews
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4 mx-4 ps-2 bg-teal-100 rounded-lg">
        <span className="text-sm font-bold text-gray-900">
          ${product.price}
        </span>
        <button
          type="button"
          onClick={() => handleClickAddToCart(product)}
          className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium text-sm px-3 py-2 rounded-lg"
        >
          <FaCartPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
