import React from "react";
import logo from "../assets/booklogo.png";
import Profile from "./AccountSection";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./component.css";
import { useAuth } from "../security/AuthContext";

function NavBar() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 pl-20 sticky top-0 z-10 shadow-sm shadow-slate-500	">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            to="/"
          >
            <img src={logo} className="h-8" alt="book Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SyncStudy
            </span>
          </Link>

          <div className="flex items-center space-x-5  md:order-2">
            {/* <!-- Long Search bar on desktop view--> */}
            <div className="">{isAuthenticated && <SearchBar />}</div>

            {/* <!-- Profile Icon --> */}
            <div className="md:order-4">{isAuthenticated && <Profile />}</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
