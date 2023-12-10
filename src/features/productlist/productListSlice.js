import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultProducts: [],
  products: [],
  categoryFilter: "all",
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.defaultProducts = action.payload;
      state.products = action.payload;
    },

    sortProductsByAlphabetAsc: (state) => {
      state.products.sort((a, b) => a.title.localeCompare(b.title));
    },

    sortProductsByAlphabetDesc: (state) => {
      state.products.sort((a, b) => b.title.localeCompare(a.title));
    },

    sortProductsByHighestPrice: (state) => {
      state.products.sort((a, b) => b.price - a.price);
    },

    sortProductsByLowestPrice: (state) => {
      state.products.sort((a, b) => a.price - b.price);
    },

    searchProductsByTitle: (state, action) => {
      const keyword = action.payload;
      const category = state.categoryFilter;
      state.products = state.defaultProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(keyword) &&
          (category === "all" || product.category === category)
      );
    },

    filterProductByCategory: (state, action) => {
      const category = action.payload;
      if (category === "all") {
        state.categoryFilter = "all";
        state.products = state.defaultProducts;
      } else {
        state.categoryFilter = category;
        state.products = state.defaultProducts.filter(
          (product) => product.category === category
        );
      }
    },
  },
});

export const {
  setProducts,
  sortProductsByAlphabetAsc,
  sortProductsByAlphabetDesc,
  sortProductsByHighestPrice,
  sortProductsByLowestPrice,
  searchProductsByTitle,
  filterProductByCategory,
} = productListSlice.actions;

export default productListSlice.reducer;

// Selector Helper
export const selectAllProducts = (state) => state.productList.products;
