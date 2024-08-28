import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav  id="navbar" className=" bg-white  fixed z-[1000] w-full">
      <div className=" space-x-24 mx-auto flex justify-center items-center">
        <div className="text-black hover:text-violet-700 text-lg font-bold w-[200px] md:h-[10vh] h-auto"><img src="../public/phonepay/phonepay01.svg" alt="" /></div>
        <div className="hidden md:flex space-x-8">
        <div className="relative">
            <Link to="/"><button
              onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)} onMouseDown={()=>(isDropdownOpen)}
              className="text-black hover:text-violet-700"
            >
              OUR SOLUTION
            </button></Link>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 h-[40vh] w-[700px] bg-white grid grid-cols-3 rounded-md shadow-lg">
                <div className='grid grid-cols-1'>
                  <div className='w-[200px] flex justify-center items-center hover:bg-violet-500 bg-violet-300 text-violet-900'>For Business</div>
                  <div className='w-[200px] flex justify-center items-center hover:bg-violet-500 bg-violet-300 text-violet-900'>For Consumers</div>
                </div>
                <div></div>
                <div></div>
                
              </div>
            )}
          </div>
          <Link to="/press"><a href="#" className="text-black hover:text-violet-700">PRESS</a></Link>
          <Link to="/carrer"><a href="#" className="text-black hover:text-violet-700">CARRER</a></Link>
          <Link to="/About"><a href="#" className="text-black hover:text-violet-700">ABOUT US</a></Link>
          <Link to="/blog"><a href="#" className="text-black hover:text-violet-700">BLOG</a></Link>
          <Link to="/contact"><a href="#" className="text-black hover:text-violet-700">CONTACT US</a></Link>
          <Link to="/trust"><a href="#" className="text-black hover:text-violet-700">TRUST & SAFETY</a></Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black md:hidden"
        >
          <img className='w-[30px] h-[3vh]' src='../public/phonepay/phonepay15.png'/>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 text-black hover:text-violet-700">OUR SOLUTION</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-violet-700 ">PRESS</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-violet-700">CARRER</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-violet-700">ABOUT US</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-violet-700">BLOG</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-violet-700 ">CONTACT US</a>
          <a href="#" className="block px-4 py-2 text-black hover:text-violet-700">TRUST & SAFETY</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
