import React from 'react';

const categories = ['All', 'Delivery', 'Dining', 'Nightlife'];

const Tabs = ({ selected, onSelect }) => {
  return (
    <div className="flex gap-4 mb-6 border-b-2 pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`text-lg font-semibold pb-1 border-b-2 transition ${
            selected === cat
              ? 'border-red-500 text-red-500'
              : 'border-transparent text-gray-600 hover:text-red-400'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
