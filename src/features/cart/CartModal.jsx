/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal";
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrices,
} from "./cartSlice";
import ProductCategory from "../productlist/ProductCategory";

const CartModal = ({ handleHideModalCart }) => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrices);
  const dispatch = useDispatch();

  const formatOrderDetails = (cartItems) => {
    return cartItems
      .map((item, i) => {
        return `${i + 1}. ${item.title} - Jumlah: ${item.quantity} - Total: $${
          item.totalPrice
        }`;
      })
      .join("\n");
  };

  const handleCheckoutToWhatsapp = () => {
    if (totalItems === 0) return;
    const orderDetails = formatOrderDetails(cartItems);

    const phoneNumber = "6281285241889";
    const message = `Halo bang, aku mau order:\n\n${orderDetails}\n\nTotal: $${totalPrice}`;

    const URL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(URL, "_blank");
  };

  const handleClickAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const handleClickReduceFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  return (
    <Modal>
      <div className="flex flex-col gap-6 p-1: sm:p-2 w-full lg:w-[900px]">
        <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
          {cartItems.map((product) => {
            return (
              <div
                className="w-full border-b-4 border-blue-200 pb-4"
                key={product.id}
              >
                <div className="flex items-center w-full">
                  <div className="w-[120px] h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-10 w-[75%]">
                    {/* Mobile View START */}
                    <h3 className="capitalize mt-3 text-lg md:hidden">
                      {product.title}
                    </h3>
                    {/* Mobile View END */}

                    {/* Desktop View START */}
                    <h3 className="capitalize mt-3 text-lg hidden md:flex md:items-center md:gap-2">
                      {product.title}
                      <ProductCategory category={product.category} />
                    </h3>
                    {/* Desktop View END */}

                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">{product.price}</h4>
                      <h3 className="text-lg font-bold">
                        {product.totalPrice}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 mt-4 ml-auto">
                      <button
                        type="button"
                        className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                        onClick={() => handleClickReduceFromCart(product.id)}
                      >
                        -
                      </button>
                      <h3>{product.quantity}</h3>
                      <button
                        type="button"
                        className="rounded-full bg-blue-400 w-5 h-5 text-white flex items-center justify-center"
                        onClick={() => handleClickAddToCart(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="text-md font-bold">Total Item: {totalItems}</h3>
          <h3 className="text-md font-bold">Total Price: {totalPrice}</h3>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-slate-600 hover:bg-slate-800 text-white py-3 px-8 rounded-xl text-sm"
            onClick={handleHideModalCart}
          >
            Close
          </button>
          <button
            type="button"
            className="bg-green-600 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl text-sm"
            onClick={handleCheckoutToWhatsapp}
          >
            Checkout (WhatsApp)
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
