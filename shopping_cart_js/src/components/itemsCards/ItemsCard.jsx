import React from 'react';
import './ItemsCard.css';

const ItemsCard = (props) => {
    return (
    <div className='item-card-container'>
      <div className="item-img-container" style={{backgroundImage:`url(${props.imgUrl})`}}>
      </div>
      <div className="item-info-container">
        <div className="item-name-price">
            <div className="item-name">
                <h3>{props.name}</h3>
            </div>
            <div className="item-price">
                <h4>${props.price}</h4>
            </div>
        </div>
        <div className="item-add-to-cart">
            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemsCard
