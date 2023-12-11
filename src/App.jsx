import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProductList";
import CartModal from "./features/cart/CartModal";
import SortProductsByAlphabet from "./features/productlist/SortProductsByAlphabet";
import SortProductsByPrice from "./features/productlist/SortProductsByPrice";
import SearchProducts from "./features/productlist/SearchProducts";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";
import FilterProducts from "./features/productlist/FilterProducts";

const App = () => {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  const [showArrowButton, setShowArrowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrowButton(true);
      } else {
        setShowArrowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleHideModalCart = () => {
    setIsOpenModalCart(false);
  };

  return (
    <>
      {isOpenModalCart ? (
        <CartModal handleHideModalCart={handleHideModalCart} />
      ) : null}
      <Header handleOpenModalCart={handleOpenModalCart} />
      <main className="max-w-7xl mx-auto px-4 py-24 md:px-10 md:pb-16">
        <div className="md:hidden">
          <SearchProducts />
        </div>
        <div className="md:flex md:justify-between md:items-center mt-6 gap-8">
          <div className="hidden md:w-1/2 md:flex md:flex-col md:rounded-md md:shadow-sm md:mt-0">
            <label className="block mb-2 font-medium text-gray-900">
              Filter Products
            </label>
            <FilterProducts />
          </div>
          <SortProductsByPrice />
          <SortProductsByAlphabet />
        </div>
        <h2 className="text-3xl font-bold mt-6">Product List</h2>
        <ProductList />
      </main>
      <Footer />
      {showArrowButton ? (
        <div
          className="fixed bottom-4 right-4 bg-blue-700 lg:p-5 md:p-5 p-3 rounded-full cursor-pointer"
          onClick={handleScrollToTop}
        >
          <FaArrowUp className="text-white text-sm" />
        </div>
      ) : null}
    </>
  );
};

export default App;
