import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { selectAllProducts, setProducts } from "./productListSlice";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // Sort products order by title ASC
        response.data.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
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

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center pt-24 2xl:pt-40">
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
        <div className="flex justify-center items-center pt-12 md:pt-40">
          <p className="text-2xl text-gray-600">No products found</p>
        </div>
      )}
    </>
  );
};

export default ProductList;
