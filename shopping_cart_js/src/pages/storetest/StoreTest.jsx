import React from 'react'
import ItemsCard from '../../components/itemsCards/ItemsCard'
import './StoreTest.css'
import data from '../../shared/constants/db.json'

const StoreTest = () => {
const items = data
  return (
    <div>
      <h1>Store</h1>
      {data.categories.map((category) => (
        <div className="items-container">
            <div className="container-title"><h3>{category.name}</h3></div>
            <div className="items-main-container">
                {category.items.map((item) =>(
                    <ItemsCard 
                    imgUrl = {item.imgUrl}
                    name = {item.name}
                    price = {item.price}
                    />
                ))}
            </div>
        </div>
      ))}
      
      
    
    </div>
  )
}

export default StoreTest
