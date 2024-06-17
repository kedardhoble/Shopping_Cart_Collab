import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
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
      <Carousel ride={false} controls={true}>
      {rows.map((row, index) => {

          return (
            <Carousel.Item key={index}>
              <h2>{row[0].category}</h2>
              <div className="row">
                {row.map((item) => {
                  console.log(item)
                  return(
                  <div style={{ marginTop: "20px" }} key={item.id} className="col-md-3">
                    <ItemCard data={item} />
                  </div>
                )})}
              </div>
              <button className='see-all-btn' onClick={toggleShowAll}>
                {showAll ? "See Less" : "See More"}
              </button>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
