// import React from "react";

const Header = () => {
  return (
    <header className="bg-[#f8fafc] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation Links */}
        
        <nav className="hidden md:flex space-x-6">
          <a href="#products" className="text-slate-700 hover:text-gray-900">
            Products
          </a>
          <a href="#wishlist" className="text-slate-700 hover:text-gray-900">
            Wishlist
          </a>
          <a href="#cart" className="text-slate-700 hover:text-gray-900">
            Cart
          </a>
        </nav>


        {/* Logo */}
        <div className="text-[#020617] text-2xl font-bold">Indicart</div>



        {/* Search and Login */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button id="menu-btn" className="text-[#020617]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="menu" className="md:hidden mt-2 space-y-2">
        <a
          href="#products"
          className="block text-slate-700 hover:text-gray-900"
        >
          Products
        </a>
        <a
          href="#wishlist"
          className="block text-slate-700 hover:text-gray-900"
        >
          Wishlist
        </a>
        <a href="#cart" className="block text-slate-700 hover:text-gray-900">
          Cart
        </a>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
          />
          <button className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 w-full">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
