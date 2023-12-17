/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeAllItemCountFromCart,
  removeItemFromCart,
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrices,
} from "./cartSlice";
import ProductCategory from "../../components/ProductCategory";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const CartModal = () => {
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
    const message = encodeURIComponent(
      `Halo bang, aku mau order:\n\n${orderDetails}\n\nTotal Keseluruhan: $${totalPrice}`
    );

    const URL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(URL, "_blank");
  };

  const handleClickAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  const handleClickReduceFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleClickTrash = (productId) => {
    dispatch(removeAllItemCountFromCart(productId));
  };

  return (
    <dialog id="cart_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-2xl text-black">Cart</h3>

          <form method="dialog">
            <button>
              <IoClose className="text-teal-700 text-3xl" />
            </button>
          </form>
        </div>

        <div className="flex flex-col overflow-x-scroll max-h-[350px] gap-3">
          {cartItems.map((product) => (
            <div key={product.id} className="border-b py-4 flex gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-1/6 object-contain"
              />
              <div className="w-4/6">
                <h3 className="text-black font-semibold text-sm mb-0.5">
                  {product.title}
                </h3>
                <ProductCategory category={product.category} />
                <h4 className="mt-4 text-black font-medium">
                  ${product.price}
                </h4>
              </div>
              <div className="flex flex-col justify-between items-end">
                <FaRegTrashAlt
                  className="text-xl text-gray-600"
                  onClick={() => handleClickTrash(product.id)}
                />
                <div className="flex items-center text-black border-2 border-gray-300 rounded-lg gap-3">
                  <button
                    className="py-1 px-2 text-teal-600 border-r-2 border-gray-300"
                    onClick={() => handleClickReduceFromCart(product.id)}
                  >
                    <FaMinus />
                  </button>
                  <h4 className="text-lg">{product.quantity}</h4>
                  <button
                    className="py-1 px-2 text-teal-600 border-l-2 border-gray-300"
                    onClick={() => handleClickAddToCart(product)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-2 md:mt-0">
          <button
            type="button"
            className={`bg-teal-600 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl text-sm ${
              totalItems === 0 ? "opacity-50" : ""
            }`}
            onClick={handleCheckoutToWhatsapp}
            style={{ cursor: totalItems === 0 ? "not-allowed" : "pointer" }}
          >
            Checkout (WhatsApp)
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default CartModal;
