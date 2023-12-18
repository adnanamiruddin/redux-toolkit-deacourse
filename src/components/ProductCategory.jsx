const ProductCategory = ({ category }) => {
  let categoryComponent;

  switch (category) {
    case "men's clothing":
      categoryComponent = (
        <span className="capitalize bg-blue-100 text-blue-800 text-xs font-medium text-center py-0.5 px-2">
          {category}
        </span>
      );
      break;
    case "women's clothing":
      categoryComponent = (
        <span className="capitalize bg-pink-100 text-pink-800 text-xs font-medium text-center py-0.5 px-2">
          {category}
        </span>
      );
      break;
    case "jewelery":
      categoryComponent = (
        <span className="capitalize bg-yellow-100 text-yellow-800 text-xs font-medium text-center py-0.5 px-2">
          {category}
        </span>
      );
      break;
    case "electronics":
      categoryComponent = (
        <span className="capitalize bg-green-100 text-green-800 text-xs font-medium text-center py-0.5 px-2">
          {category}
        </span>
      );
      break;
    default:
      categoryComponent = null;
      break;
  }

  return categoryComponent;
};

export default ProductCategory;
