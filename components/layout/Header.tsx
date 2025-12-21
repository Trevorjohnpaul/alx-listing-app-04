import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className="flex items-center gap-2">
                <div className="w-10 h-10 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  VL
                </div>
                <span className="font-semibold text-lg">Vilis Listings</span>
              </a>
            </Link>

            <nav className="hidden md:flex items-center gap-3 text-sm text-gray-600">
              <a className="hover:text-gray-900 cursor-pointer">Rooms</a>
              <a className="hover:text-gray-900 cursor-pointer">Villas</a>
              <a className="hover:text-gray-900 cursor-pointer">Mansions</a>
              <a className="hover:text-gray-900 cursor-pointer">Countryside</a>
            </nav>
          </div>

          <div className="flex-1 mx-6 hidden md:block">
            <div className="relative">
              <input
                aria-label="search"
                type="search"
                placeholder="Search city, state, or property"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/signin">
              <a className="text-sm">Sign in</a>
            </Link>
            <Link href="/signup">
              <a className="hidden sm:inline-block bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700">
                Sign up
              </a>
            </Link>
            <button
              className="md:hidden p-2 rounded-md border"
              aria-label="open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
