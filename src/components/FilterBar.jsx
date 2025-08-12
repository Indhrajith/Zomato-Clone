import React, { useState } from 'react';

const FilterBar = ({ onFilter, onSearch, onSort }) => {
  const [searchInput, setSearchInput] = useState('');
  const cuisines = ['All', 'Hyderabadi', 'Italian', 'Japanese', 'South Indian', 'North Indian'];

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-8 px-2">
      {/* Cuisine Filter */}
      <div className="flex flex-wrap gap-2">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => onFilter(cuisine)}
            className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Search & Sort */}
      <div className="flex gap-3 mt-4 md:mt-0">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search by name or location"
          className="px-3 py-2 border border-gray-600 rounded-md text-white bg-gray-800 placeholder-gray-400"
        />
        <select
          onChange={(e) => onSort(e.target.value)}
          className="px-3 py-2 border border-gray-600 rounded-md text-white bg-gray-800"
        >
          <option value="">Sort</option>
          <option value="high">Rating: High to Low</option>
          <option value="low">Rating: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
