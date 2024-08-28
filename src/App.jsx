import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import "./App.css"
import Header from './Header'
import Navbar from './Navbar.jsx'
import Footer from "./Footer.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<div className='bg-red-500 w-full h-[20vh] mt-10'><h1 >hello</h1></div>} />
        <Route path="/About" element={<Header/>} />
        <Route path="/tust" element={<div className='bg-green-500 w-full h-[20vh] mt-10'><h1 >hello</h1></div>} />
        <Route path="/press" element={<div className='bg-gray-500 w-full h-[20vh] mt-10'><h1 >hello</h1></div>} />
        <Route path="/contact" element={<div className=' bg-blue-600 w-full h-[20vh] mt-10'><h1 >hello</h1></div>} />
        <Route path="/carrer" element={<div className='bg-yellow-200 w-full h-[20vh] mt-10'><h1 >hello</h1></div>} />
        <Route path="/blog" element={<div className='bg-pink-400 w-full h-[20vh] mt-10'><h1 >hello</h1></div>} />
      </Routes>
      </BrowserRouter>
      
    <Footer/>
    </div>
  )
}

export default App
