import React from "react";
import logo from "../assets/booklogo.png";
import Profile from "./AccountSection";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "./component.css";
import { useAuth } from "../security/AuthContext";

function NavBar() {
    const numberOfItemsInCart = 0;
    const { isAuthenticated } = useAuth();
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 pl-20">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse" to="/">
                        <img src={logo} className="h-8" alt="book Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BookCenter</span>
                    </Link>
                    <div className="flex md:order-2">
                        {/* <!-- Menu butoon on mobile view --> */}
                        {/* <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button> */}
                    </div>

                    <div className="flex items-center space-x-5  md:order-2">

                        {/* <!-- Long Search bar on desktop view--> */}
                        <div className="">
                            {isAuthenticated && <SearchBar />}
                        </div>


                        {/* <!-- Cart Icon --> */}
                        {isAuthenticated && <div className="flex items-center space-x-3 md:order-3">
                            <Link href="#" role="button" className="relative flex" to="/books/cart">
                                <FontAwesomeIcon icon={faShoppingCart} className="text-blue-500 hover:text-blue-200" style={{ fontSize: '1.8rem' }} />
                                {numberOfItemsInCart > 0 && (
                                    <span className="absolute right-0 top-0 w-3 h-3  text-white font-mono text-sm leading-tight " style={{ marginTop: '-0.1rem', marginRight: '0.2rem' }}>
                                        {numberOfItemsInCart}
                                    </span>
                                )}
                            </Link>
                        </div>}

                        {/* <!-- Profile Icon --> */}
                        <div className="md:order-4">
                            {isAuthenticated && <Profile />}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;