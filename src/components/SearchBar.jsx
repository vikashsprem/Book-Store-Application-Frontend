import React, { useState } from "react";
import "./component.css";

function SearchBar() {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  return (
    <div className="flex bg-gray-600 pl-3 rounded-md">
      <input
        type="search"
        className="bg-transparent border-none flex-1 outline-none"
        placeholder="Search for books"
        required
      />
      <button
        type="submit"
        className="bg-blue-700 p-3 rounded-md px-4 cursor-pointer"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
}

export default SearchBar;
