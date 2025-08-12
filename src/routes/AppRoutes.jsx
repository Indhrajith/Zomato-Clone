import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import AddRestaurant from '../pages/AddRestaurant';
import EditRestaurant from '../pages/EditRestaurant';
import RestaurantDetails from '../pages/RestaurantDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import { getRestaurants, saveRestaurants } from '../services/restaurantService';
import PrivateRoute from './PrivateRoute';

// ✅ Import local images
import biryaniImg from '../assets/images/HyderBriyani.webp';
import pizzaImg from '../assets/images/Pizza.webp';
import DosaImg from '../assets/images/Dosa.webp';
import ParrotaImg from '../assets/images/Parrota.jpeg';
import OyakodanImg from '../assets/images/Oyakodan.webp';
import UdonNoodlesImg from '../assets/images/UdonNoodles.webp';
import ChappathiImg from '../assets/images/Chappathi.jpeg';
import YakhniPulaoImg from '../assets/images/YakhniPulao.jpeg';
import ThaliImg from '../assets/images/Thali.jpeg';

const AppRoutes = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const stored = getRestaurants();
    setRestaurantList(
      stored.length
        ? stored
        : [
            {
              id: 1,
              name: 'The Biryani House',
              cuisine: 'Hyderabadi',
              rating: 4.2,
              location: 'Bangalore',
              category: 'Dining',
              image: biryaniImg, // ✅ Updated
            },
            {
              id: 2,
              name: 'Pizza Hub',
              cuisine: 'Italian',
              rating: 4.5,
              location: 'Chennai',
              category: 'Delivery',
              image: pizzaImg, // ✅ Updated
            },
            {
              id: 3,
              name: 'Saravana Bavan',
              cuisine: 'South Indian',
              rating: 4.7,
              location: 'Chennai',
              category: 'Dining',
              image: DosaImg, // ✅ Updated
            },
            {
              id: 4,
              name: 'Shakthi Vilas Parotta',
              cuisine: 'South Indian',
              rating: 4.9,
              location: 'Chennai',
              category: 'Delivery',
              image: ParrotaImg, // ✅ Updated
            },
            {
              id: 5,
              name: 'Japanese Delights',
              cuisine: 'Japanese',
              rating: 4.7,
              location: 'Chennai',
              category: 'Dining',
              image: OyakodanImg, // ✅ Updated
            },
            {
              id: 6,
              name: 'Japanese Delights',
              cuisine: 'Japanese',
              rating: 4.9,
              location: 'Chennai',
              category: 'Dining',
              image: UdonNoodlesImg, // ✅ Updated
            },
            {
              id: 7,
              name: 'Indian Kitchen',
              cuisine: 'North Indian',
              rating: 4.9,
              location: 'Chennai',
              category: 'Delivery',
              image: ChappathiImg, // ✅ Updated
            },
            {
              id: 8,
              name: 'Dhaba Express',
              cuisine: 'North Indian',
              rating: 4.8,
              location: 'Chennai',
              category: 'Nightlife',
              image: ThaliImg, // ✅ Updated
            },
            {
              id: 9,
              name: 'Dhaba Express',
              cuisine: 'North Indian',
              rating: 4.5,
              location: 'Chennai',
              category: 'Nightlife',
              image: YakhniPulaoImg, // ✅ Updated
            }
          ]
    );
  }, []);

  useEffect(() => {
    saveRestaurants(restaurantList);
  }, [restaurantList]);

  const handleAddRestaurant = (newRes) => {
    setRestaurantList((prev) => [...prev, newRes]);
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/restaurants"
        element={
          <PrivateRoute>
            <Home
              restaurantList={restaurantList}
              setRestaurantList={setRestaurantList}
            />
          </PrivateRoute>
        }
      />
      <Route
        path="/add"
        element={
          <PrivateRoute>
            <AddRestaurant onAdd={handleAddRestaurant} />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditRestaurant
              restaurantList={restaurantList}
              setRestaurantList={setRestaurantList}
            />
          </PrivateRoute>
        }
      />
      <Route
        path="/restaurant/:id"
        element={
          <PrivateRoute>
            <RestaurantDetails restaurantList={restaurantList} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
