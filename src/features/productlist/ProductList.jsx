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
        // Filter products order by title ASC
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
        <div className="flex justify-center items-center pt-40">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              handleClickAddToCart={handleClickAddToCart}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
