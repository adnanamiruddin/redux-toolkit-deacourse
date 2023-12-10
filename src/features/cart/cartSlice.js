import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const selectedItemIndex = state.items.findIndex(
        (product) => product.id === newItem.id
      );

      // Jika item sudah ada di cart, maka tambahkan quantity dan totalPrice
      if (selectedItemIndex !== -1) {
        const selectedItem = state.items[selectedItemIndex];
        selectedItem.quantity++;
        selectedItem.totalPrice = selectedItem.quantity * newItem.price;
      } else {
        // Jika item belum ada di cart, maka tambahkan item tersebut ke cart sebagai item baru
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },

    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const itemIndex = state.items.findIndex(
        (product) => product.id === itemIdToRemove
      );

      // Jika item sudah ada di cart, maka kurangi quantity dan totalPrice
      if (itemIndex !== -1) {
        const itemToRemove = state.items[itemIndex];
        // Jika quantity > 1, maka kurangi quantity dan totalPrice
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity--;
          itemToRemove.totalPrice = itemToRemove.quantity * itemToRemove.price;
        } else {
          // Jika quantity === 1, maka hapus item dari cart
          state.items.splice(itemIndex, 1);
        }
      } else {
        return;
      }
    },

    removeAllItemsFromCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// Selector Helper
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrices = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);
