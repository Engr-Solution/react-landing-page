import React from "react";
import Logo from "../images/logo.png";

function Nav() {
  return (
    <div className="sticky top-0 left-0 bg-white flex justify-between aligns-center px-8 md:px-16 lg:px-28 py-4 z-50">
      <div className="flex items-center">
        <div className=" lg:hidden w-12 h-12 p-2 flex flex-col justify-center items-end gap-2 overflow-hidden cursor-pointer">
          <div className="w-full border border-primary"></div>
          <div className="w-4/6 border border-primary"></div>
          <div className="w-full border border-primary"></div>
        </div>
        <a href="/">
          <img src={Logo} alt="logo" className="w-48 lg:w-60 h-30" />
        </a>
      </div>
      <div className="flex gap-6 items-center divide-x-6 divide-dark">
        <ul className="hidden lg:flex gap-6">
          <li className="text-md text-dark cursor-pointer transition duration-300 hover:text-primary">
            For merchants
          </li>
          <li className="text-md text-dark cursor-pointer transition duration-300 hover:text-primary">
            For shoppers
          </li>
          <li className="text-md text-dark cursor-pointer transition duration-300 hover:text-primary">
            Solutions
          </li>
          <li className="text-md text-dark cursor-pointer transition duration-300 hover:text-primary">
            Apace
          </li>
        </ul>
        <button className="px-4 py-1 rounded-3xl text-light bg-primary cursor-pointer transition duration-300 hover:bg-secondary">
          Get a demo
        </button>
      </div>
    </div>
  );
}

export default Nav;
