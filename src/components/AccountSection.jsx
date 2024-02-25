// UserDropdown.js

import React from 'react';
import { useState } from 'react';
import profile from '../assets/profile.png';
import { useAuth } from '../security/AuthContext';

const Profile = () => {

    const { username } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div className='relative'>
                <img
                    id="avatarButton"
                    type="button"
                    data-dropdown-toggle="userDropdown"
                    data-dropdown-placement="bottom-start"
                    className="w-12 h-12 cursor-pointer"
                    src={profile}
                    alt="User dropdown"
                    onClick={toggleDropdown}
                />

                {/* Dropdown menu */}
                <div
                    id="userDropdown"
                    className={`${isDropdownOpen ? 'block' : 'hidden'
                        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute mt-3`}
                    style={{
                        right: window.innerWidth - event.clientX < 200 ? '0' : 'auto',
                        left: window.innerWidth - event.clientX < 200 ? 'auto' : '0',
                    }}
                >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>Vikash Prem Sharma</div>
                        <div className="font-medium truncate">{username}</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Earnings
                            </a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Profile;
