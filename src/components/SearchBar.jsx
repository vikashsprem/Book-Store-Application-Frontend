import React, { useState } from 'react';
import "./component.css";

function SearchBar() {
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    };

    return (
        <>
            <form>
                <div className="flex">

                    <select className='p-1 bg-slate-500 outline-none'>
                        <option id='category' value="All">All</option>
                        <option id='category' value="Fiction">Fiction</option>
                        <option id='category' value="Science Fiction">Science Fiction</option>
                        <option id='category' value="Mystery/Thriller">Mystery/Thriller</option>
                        <option id='category' value="Fantasy">Fantasy</option>
                    </select>


                    <div className="relative w-full">
                        <input
                            type="search"
                            className="block p-2.5 px-4 w-full md:w-96 z-20 text-sm text-gray-900 bg-gray-50  border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search for books"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-800  border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SearchBar;
