import React from "react";

const Header = () => {
  return (
    <header className=" text-white p-4">
      <div className="container mx-auto flex justify-around gap-8 items-center">
        <h1 className="text-6xl font-extralight">Smooth</h1>
        <nav>
          <ul className="flex gap-8 text-2xl font-semibold fon">
            <li>
              <a href="#" className="hover:text-gray-300">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Resources
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
