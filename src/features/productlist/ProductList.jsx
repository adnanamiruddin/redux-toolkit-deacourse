import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { selectAllProducts, setProducts } from "./productListSlice";
import ProductItem from "./ProductItem";
import NoProductsFoundImage from "../../assets/no-products-found.jpeg";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    fetchDataProducts();
  }, [dispatch]);

  const handleClickAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <div className="loader"></div>
        </div>
      ) : products.length > 0 ? (
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleClickAddToCart={handleClickAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 h-[70vh]">
          <img
            src={NoProductsFoundImage}
            alt="No Products Found"
            className="w-1/2 md:w-1/4 object-contain rounded"
          />
          <h4 className="text-black font-medium">
            Ups. No products found. Try again later ^_^
          </h4>
        </div>
      )}
    </>
  );
};

export default ProductList;
