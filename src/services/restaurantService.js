const STORAGE_KEY = 'restaurantData';

export const getRestaurants = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveRestaurants = (list) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
};
