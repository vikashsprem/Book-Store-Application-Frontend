// Example in a React component
import React from "react";
import "./component.css";
const CartItem = () => {
    return (
        <div className="flex flex-col space-y-1 animate-slide-fade">

            <div className="rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start mb-1">
                <img
                    src="https://cdn.kobo.com/book-images/b821b926-f56d-43c3-bfb7-81f4da772ca1/353/569/90/False/summary-of-the-alchemist-6.jpg"
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between space-x-3">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">The Alchemist</h2>
                        <p className="mt-1 text-xs text-gray-700">₹49</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-500 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                            <input className="h-8 w-8 border bg-green-400 text-center text-xs outline-none" type="number" value="2" min="1" />
                            <span className="cursor-pointer rounded-r bg-gray-500 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">₹98.00</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SubTotal = () => {
    return (
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 animate-slide-fade">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Order Summery</h2>
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">₹200</p>
            </div>
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Discount</p>
                <p className="text-gray-700">₹120</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">₹40</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">₹{160}</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
    );
};

const CartItems = () => {
    return (
        <>
            <div className="h-screen bg-gray-100 pt-1 space-y-1 animate-slide-fad">
                <div className="h-min rounded-lg  p-3 border-b-2 border-gray-400 m-5">
                    <h2 className="text-center text-black text-3xl font-bold uppercase">Cart Items details</h2>
                </div>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div flex flex-col>
                        <CartItem />
                        <CartItem />
                    </div>
                    <SubTotal />
                </div>
            </div>
        </>
    );
};

export default CartItems;
