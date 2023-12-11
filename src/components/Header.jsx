/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import SearchProducts from "../features/productlist/SearchProducts";

const Header = ({ handleOpenModalCart }) => {
  const cartTotalItems = useSelector(selectCartTotalItems);

  return (
    <header className="bg-gradient-to-t from-orange-600 via-orange-500 to-orange-500 fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between h-20">
        <h1 className="text-3xl font-bold text-white flex items-center gap-1">
          <MdOutlineShoppingBag className="text-5xl" />
          Gopee
        </h1>
        <div className="hidden md:block w-3/6">
          <SearchProducts />
        </div>
        <button
          type="button"
          className="relative rounded-full p-2 bg-orange-600 text-gray-100 mr-4"
          onClick={handleOpenModalCart}
        >
          {cartTotalItems > 0 ? (
            <span className="absolute -top-2 -right-2 bg-red-200 text-red-900 font-bold rounded-full w-5 h-5 flex justify-center items-center">
              {cartTotalItems}
            </span>
          ) : null}
          <IoCartOutline className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;
