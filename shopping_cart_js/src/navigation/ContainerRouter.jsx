import React from 'react'
import HomeContainer from '../pages/home/HomeContainer'
import AboutContainer from '../pages/about/AboutContainer'
import StoreContainer from '../pages/store/StoreContainer'
import CartContainer from '../pages/cart/CartContainer'
import { Routes, Route } from 'react-router-dom'
import DetailsContainer from '../pages/details/DetailsContainer'
import Test from '../pages/test/test'
import StoreTest from '../pages/storetest/StoreTest'
const ContainerRouter = () => {
  return (
    <div>
    <div className="mb-4 container">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/store" element={<StoreContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/details/:id" element={<DetailsContainer />} />
          <Route path="/test" element={<Test/>}/>
          <Route path="/storetest" element={<StoreTest />} />
        </Routes>
      </div>       
    </div>
  )
}

export default ContainerRouter
