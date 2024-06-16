import React, { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
import ItemCard from '../cards/ItemCard.jsx';
import './Slider.css';

const Slider = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Splitting items into arrays of 4 items each for each row
  const rows = showAll ? [items] : items.reduce((acc, curr, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(curr);

    return acc;
  }, []);

  return (
    <div className="slider-container">
      <Carousel controls={false} interval={null}>
        {rows.map((row, index) => (
          <Carousel.Item key={index}>
            <h2>{row[0].category}</h2>
            <div className="row">
              {row.map((item) => (
                <div key={item.id} className="col-md-3">
                  <ItemCard data={item} showAll={showAll} />
                </div>
              ))}
            </div>
            {!showAll && <button className="see-all-btn" onClick={toggleShowAll}>See All</button>}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
