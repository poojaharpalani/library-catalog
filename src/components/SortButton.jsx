import { useState } from "react";

const SortButton = ({ setSortOrder }) => {
  const [showSortList, setShowSortList] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setShowSortList((prev) => !prev)}
      >
        <span className="text-blue-700">Sort</span>
        <i className="fas fa-sort text-blue-700"></i>
      </button>

      {showSortList && (
        <ul className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
          <li
            className="px-4 py-2 text-blue-500 hover:bg-blue-50 cursor-pointer transition-colors duration-150 rounded-t-lg border-b border-gray-100"
            onClick={() => {
              setSortOrder("asc");
              setShowSortList(false);
            }}
          >
            A-Z
          </li>
          <li
            className="px-4 py-2 text-blue-500 hover:bg-blue-50 cursor-pointer transition-colors duration-150 rounded-b-lg"
            onClick={() => {
              setSortOrder("desc");
              setShowSortList(false);
            }}
          >
            Z-A
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortButton;
