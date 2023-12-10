import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./features/productlist/ProductList";
import CartModal from "./features/cart/CartModal";
import SortProductsByAlphabet from "./features/productlist/SortProductsByAlphabet";
import SortProductsByPrice from "./features/productlist/SortProductsByPrice";
import SearchProducts from "./features/productlist/SearchProducts";

const App = () => {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

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
      <main className="max-w-7xl mx-auto px-4 pt-24">
        <SearchProducts />
        <div className="flex justify-between items-center mt-6 gap-8">
          <SortProductsByPrice />
          <SortProductsByAlphabet />
        </div>
        <h2 className="text-3xl font-bold mt-6">Product List</h2>
        <ProductList />
      </main>
    </>
  );
};

export default App;
