import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProductList";
import CartModal from "./features/cart/CartModal";
import SearchProducts from "./features/productlist/SearchProducts";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";
import ProductCategoriesSlider from "./features/productlist/ProductCategoriesSlider";
import SortProductsDrawer from "./features/productlist/SortProductsDrawer";
import { CiFilter } from "react-icons/ci";

const App = () => {
  const [isShowArrowButton, setIsShowArrowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsShowArrowButton(true);
      } else {
        setIsShowArrowButton(false);
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

  return (
    <>
      <CartModal />
      <SortProductsDrawer />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-24 md:px-10 md:pb-16">
        <div className="md:hidden">
          <SearchProducts />
        </div>
        <div className="mt-5 mb-0 md:my-5 flex justify-between">
          <ProductCategoriesSlider />
          <div className="drawer-content hidden md:inline-block">
            <label htmlFor="sort_drawer">
              <div className="py-2 px-5 text-white text-sm font-medium flex justify-around items-center gap-3 rounded-lg bg-teal-600 border border-white hover:cursor-pointer hover:bg-white hover:text-teal-600 hover:border-teal-600">
                <h4>Sort Products</h4>
                <CiFilter className="text-2xl" />
              </div>
            </label>
          </div>
        </div>
        <ProductList />
      </main>
      <Footer />
      <div
        className={`fixed bottom-4 right-4 bg-teal-700 p-3 lg:p-4 rounded-full cursor-pointer transition-all duration-500 ease-in-out ${
          isShowArrowButton ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleScrollToTop}
      >
        <FaArrowUp className="text-white" />
      </div>
    </>
  );
};

export default App;
