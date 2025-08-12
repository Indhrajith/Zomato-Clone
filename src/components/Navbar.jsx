import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-500">Zomato Clone</h1>
        <input
          type="text"
          placeholder="Search for restaurants or cuisines..."
          className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button className="text-red-500 font-semibold hover:underline">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
