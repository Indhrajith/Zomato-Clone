import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import RestaurantCard from '../components/RestaurantCard';
import FilterBar from '../components/FilterBar';
import Tabs from '../components/Tabs';
import Footer from '../components/Footer/Footer'; // ✅ Import Footer

const Home = ({ restaurantList = [], setRestaurantList = () => {} }) => {
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter restaurants by category
  useEffect(() => {
    if (Array.isArray(restaurantList)) {
      if (activeCategory === 'All') {
        setFiltered(restaurantList);
      } else {
        setFiltered(restaurantList.filter((res) => res.category === activeCategory));
      }
    } else {
      setFiltered([]);
    }
  }, [restaurantList, activeCategory]);

  const handleCategoryFilter = (category) => setActiveCategory(category);

  const handleCuisineFilter = (cuisine) => {
    const baseList =
      activeCategory === 'All'
        ? restaurantList
        : restaurantList.filter((res) => res.category === activeCategory);

    setFiltered(
      cuisine === 'All'
        ? baseList
        : baseList.filter((res) => res.cuisine === cuisine)
    );
  };

  const handleSearch = (query) => {
    const lower = query.toLowerCase();
    const baseList =
      activeCategory === 'All'
        ? restaurantList
        : restaurantList.filter((res) => res.category === activeCategory);

    setFiltered(
      baseList.filter(
        (res) =>
          res.name.toLowerCase().includes(lower) ||
          res.location.toLowerCase().includes(lower)
      )
    );
  };

  const handleSort = (order) => {
    const sorted = [...filtered].sort((a, b) =>
      order === 'high' ? b.rating - a.rating : a.rating - b.rating
    );
    setFiltered(sorted);
  };

  const handleDelete = (id) => {
    const updated = restaurantList.filter((res) => res.id !== id);
    setRestaurantList(updated);
    setFiltered(updated);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#f8f8f8]">
      {/* Content wrapper with flex-grow */}
      <div className="flex-grow">
        {/* 🔥 Hero Banner */}
        <Hero />

        {/* 🧭 Explore Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            Explore Restaurants
          </h2>

          {/* 🚀 Category + FilterBar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Tabs selected={activeCategory} onSelect={handleCategoryFilter} />
            <FilterBar
              onFilter={handleCuisineFilter}
              onSearch={handleSearch}
              onSort={handleSort}
            />
          </div>

          {/* 🍔 Restaurant Cards */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.length > 0 ? (
              filtered.map((res) => (
                <RestaurantCard
                  key={res.id}
                  restaurant={res}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <p className="text-gray-500 text-lg col-span-full text-center">
                No restaurants found.
              </p>
            )}
          </div>
        </section>

        {/* 📍 Popular Locations Section */}
        <section className="bg-white py-12 text-center mt-10 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Popular Locations in 🇮🇳 India
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From swanky upscale restaurants to the coziest hidden gems,
            discover popular locations across India.
          </p>
        </section>
      </div>

      {/* 📌 Sticky Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Home;
