import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productListSlice from "./features/productlist/productListSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    productList: productListSlice,
  },
});
