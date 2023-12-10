import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { selectAllProducts, setProducts } from "./productListSlice";
import { FaStar, FaCartPlus } from "react-icons/fa";

const showRatingStarts = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="text-yellow-300" />);
  }
  return stars;
};

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getDataProducts();
  }, [dispatch]);

  const handleClickAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const toPascalCase = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center -mt-40 min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col"
            >
              <div className="relative w-[80%] h-[350px] mx-auto overflow-hidden p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="px-5 pb-5 flex-grow">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex">
                  {product.title}
                </h5>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {toPascalCase(product.category)}
                </span>

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
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
