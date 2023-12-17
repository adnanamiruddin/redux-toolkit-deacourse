const ProductCategory = ({ category }) => {
  const toPascalCase = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  let categoryComponent;

  switch (category) {
    case "men's clothing":
      categoryComponent = (
        <span className="bg-blue-100 text-blue-800 text-[11px] font-medium text-center py-0.5">
          {toPascalCase(category)}
        </span>
      );
      break;
    case "women's clothing":
      categoryComponent = (
        <span className="bg-pink-100 text-pink-800 text-[11px] font-medium text-center py-0.5">
          {toPascalCase(category)}
        </span>
      );
      break;
    case "jewelery":
      categoryComponent = (
        <span className="bg-yellow-100 text-yellow-800 text-[11px] font-medium text-center py-0.5">
          {toPascalCase(category)}
        </span>
      );
      break;
    case "electronics":
      categoryComponent = (
        <span className="bg-green-100 text-green-800 text-[11px] font-medium text-center py-0.5">
          {toPascalCase(category)}
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
