import React, { useEffect, useState } from 'react';
import Slider from '../carousel/Slider.jsx';
import itemsData from '../../shared/constants/items.json';
import './StorePage.css';

const StorePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(itemsData);
  }, []);

  return (
    <div className="store-page">
      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h2>{category.name}</h2>
          <Slider items={category.items} />
        </div>
      ))}
    </div>
  );
};

export default StorePage;

// useEffect(() => {
//   // Fetch data from items.json when the component mounts
//   fetchItemsData();
// }, []);

// const fetchItemsData = async () => {
//   try {
//     // Fetch data from items.json
//     const response = await fetch(itemsData);
//     const data = await response.json();
//     // Set categories state with the fetched data
//     setCategories(data);
//   } catch (error) {
//     console.error('Error fetching items data:', error);
//   }
// };

// return (
//   <div className="store-page">
//     {categories.map((category) => (
//       <div key={category.name} className="category-section">
//         <h2>{category.name}</h2>
//         <Slider items={category.items} />
//       </div>
//     ))}
//   </div>
// );
// };

// export default StorePage;
