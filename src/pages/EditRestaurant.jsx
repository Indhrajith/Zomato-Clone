import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditRestaurant = ({ restaurantList, setRestaurantList }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurantList.find((res) => res.id === parseInt(id));

  const [form, setForm] = useState(restaurant || {});

  useEffect(() => {
    if (!restaurant) {
      navigate('/');
    }
  }, [restaurant, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = restaurantList.map((r) =>
      r.id === restaurant.id ? { ...form, rating: parseFloat(form.rating) } : r
    );
    setRestaurantList(updatedList);
    navigate('/restaurants');
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Edit Restaurant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'cuisine', 'rating', 'location', 'image'].map((field) => (
          <input
            key={field}
            type={field === 'rating' ? 'number' : 'text'}
            name={field}
            placeholder={`Enter ${field}`}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        ))}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRestaurant;
