import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import sampleImage from '../assets/images/Restaurant.webp'; // ✅ import

const RestaurantDetails = ({ restaurantList }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurantList.find((res) => res.id === parseInt(id));

  if (!restaurant) {
    return (
      <div className="text-center mt-10 text-xl text-gray-700">
        Restaurant not found.
        <br />
        <button onClick={() => navigate('/restaurants')} className="text-red-500 underline mt-4 block">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={restaurant.image || sampleImage} alt={restaurant.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
      <p className="text-lg text-gray-700 mb-2"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p className="text-lg text-gray-700 mb-2"><strong>Location:</strong> {restaurant.location}</p>
      <p className="text-lg text-gray-700 mb-2"><strong>Rating:</strong> ⭐ {restaurant.rating}</p>

      <button
        onClick={() => navigate('/restaurants')}
        className="mt-6 inline-block px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Back to List
      </button>
    </div>
  );
};

export default RestaurantDetails;
