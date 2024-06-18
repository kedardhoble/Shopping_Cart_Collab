import React, { useEffect, useState } from 'react';
import axios from 'axios';
import itemsData from '../../shared/constants/items.json';
import './StorePage.css';
import Store from './Store'

const StoreContainer = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories'); // Replace with your API endpoint
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Store 
    categories = {categories}/>
  );
};

export default StoreContainer;

