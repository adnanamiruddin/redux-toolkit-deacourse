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
        <div className="my-4">
          <ProductCategoriesSlider />
        </div>
        <h2 className="text-3xl font-bold text-black">Product List</h2>
        <ProductList />
      </main>
      <Footer />
      {isShowArrowButton ? (
        <div
          className="fixed bottom-4 right-4 bg-teal-700 lg:p-5 md:p-5 p-3 rounded-full cursor-pointer"
          onClick={handleScrollToTop}
        >
          <FaArrowUp className="text-white text-sm" />
        </div>
      ) : null}
    </>
  );
};

export default App;
