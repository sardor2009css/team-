import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex flex-col w-full">
            <nav className="flex items-center justify-between px-[100px] py-[30px] w-full absolute top-0 z-50 text-white">
                <div className="text-[#D48D5E] text-[28px] font-bold italic">
                    Local Face
                </div>

                <div className="flex gap-[40px] text-[16px] text-gray-300">
                    <a href="/" className="hover:text-white">Home</a>
                    <a href="#" className="hover:text-white">Shop</a>
                    <a href="#" className="hover:text-white">About us</a>
                    <a href="#" className="hover:text-white">Services</a>
                    <a href="#" className="hover:text-white">Blog</a>
                </div>

                <div className="flex gap-[25px] items-center">
                    <img src="./search.png" alt="" />
                    <img src="./user.png" alt="" />
                    <img src="./heart.png" alt="" />
                    <img  src="./shopping-bag.png" alt="" />
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Header;