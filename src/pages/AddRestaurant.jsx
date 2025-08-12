import React, { useState } from 'react';

const AddRestaurant = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    cuisine: '',
    rating: '',
    location: '',
    image: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      ...form,
      id: Date.now(),
      rating: parseFloat(form.rating)
    };
    onAdd(newRestaurant);
    setForm({ name: '', cuisine: '', rating: '', location: '', image: '' });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Add New Restaurant</h2>
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
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
