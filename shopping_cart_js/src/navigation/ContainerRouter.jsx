import React from 'react'
import Home from '../pages/home/Home'
import Store from '../pages/store/Store'
import About from '../pages/about/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const ContainerRouter = () => {
  return (
    <div>
    <div className="mb-4 container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
      </div>       
    </div>
  )
}

export default ContainerRouter
