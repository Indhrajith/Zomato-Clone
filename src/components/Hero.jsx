import React from 'react';
import zomatoHero from '../assets/images/Background1.png'; // ✅ Local image

const Hero = () => {
  return (
    <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden">
      {/* ✅ Background Image */}
      <img
        src={zomatoHero}
        alt="Zomato Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* ✅ Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
          Discover the best food & drinks in your city
        </h1>

        <p className="text-lg md:text-2xl mb-6">
          Explore top restaurants, cafés, and bars
        </p>

        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full px-6 py-3 rounded-md text-gray-900 text-base md:text-lg shadow-md focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
