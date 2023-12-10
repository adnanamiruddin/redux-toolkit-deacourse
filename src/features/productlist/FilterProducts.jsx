/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductByCategory } from "./productListSlice";

const FilterProducts = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  const toPascalCase = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  const handleFilterByCategory = (category) => {
    dispatch(filterProductByCategory(category));
  };
  return (
    <select
      onChange={(e) => handleFilterByCategory(e.target.value)}
      className="w-2/6 md:w-1/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="all">All</option>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {toPascalCase(category)}
        </option>
      ))}
    </select>
  );
};

export default FilterProducts;
