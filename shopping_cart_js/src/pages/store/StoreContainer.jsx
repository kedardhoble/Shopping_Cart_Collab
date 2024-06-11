import React, { useEffect, useState } from 'react';
import itemsData from '../../shared/constants/items.json';
import './StorePage.css';
import Store from './Store'

const StoreContainer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(itemsData);
  }, []);

  return (
    <Store 
    categories = {categories}/>
  );
};

export default StoreContainer;

