/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import SortProductsByAlphabet from "./SortProductsByAlphabet";
import SortProductsByPrice from "./SortProductsByPrice";

const SortProductsDrawer = () => {
  return (
    <div className="drawer z-40">
      <input id="sort_drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label
          htmlFor="sort_drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 w-80 min-h-full bg-teal-50 text-black flex flex-col gap-6">
          <div className="-mb-2 md:-mb-0 flex justify-between items-center">
            <h2 className="font-bold text-2xl">Sort Products</h2>
            <label htmlFor="sort_drawer">
              <IoClose className="text-teal-700 text-4xl hover:cursor-pointer" />
            </label>
          </div>
          <SortProductsByAlphabet />
          <SortProductsByPrice />
        </div>
      </div>
    </div>
  );
};

export default SortProductsDrawer;

{
  /* <dialog id="sort_modal" className="modal modal-bottom sm:modal-middle">
<div className="modal-box bg-gray-50">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-bold text-2xl text-black">Sort Products</h3>

    <form method="dialog">
      <button>
        <IoClose className="text-teal-700 text-3xl" />
      </button>
    </form>
  </div>
</div>

<form method="dialog" className="modal-backdrop">
  <button>Close</button>
</form>
</dialog> */
}
