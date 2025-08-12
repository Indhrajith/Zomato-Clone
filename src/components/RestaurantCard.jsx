import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaTrashAlt } from 'react-icons/fa';
import sampleImage from '../assets/images/Restaurant.webp'; // ✅ import

const RestaurantCard = ({ restaurant, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 w-[300px]">

      {/* Image */}
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/restaurant/${restaurant.id}`)}
      >
        <img
          src={restaurant.image || sampleImage} // ✅ fallback to local image
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {restaurant.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{restaurant.cuisine}</p>
          </div>

          {/* Rating */}
          <div className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            <FaStar className="text-yellow-300" />
            <span>{restaurant.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mt-3">
          <FaMapMarkerAlt className="mr-1 text-red-400" />
          <span>{restaurant.location}</span>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => navigate(`/edit/${restaurant.id}`)}
            className="text-sm text-blue-500 hover:underline"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(restaurant.id)}
            className="text-sm text-red-500 hover:underline flex items-center gap-1"
          >
            <FaTrashAlt /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
