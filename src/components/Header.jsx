/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectCartTotalItems } from "../features/cart/cartSlice";
import { IoCartOutline } from "react-icons/io5";

const Header = ({ handleOpenModalCart }) => {
  const cartTotalItems = useSelector(selectCartTotalItems);

  return (
    <header className="bg-blue-700 fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        <h1 className="text-3xl font-bold text-gray-100">NoxCart</h1>
        <button
          type="button"
          className="relative rounded-full bg-blue-800 p-2 text-gray-100"
          onClick={handleOpenModalCart}
        >
          {cartTotalItems > 0 ? (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
              {cartTotalItems}
            </span>
          ) : null}
          <IoCartOutline className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
