import React, { useState } from 'react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="bg-white text-black p-6 ">
      <div className="p-12 gap-x-[200px] xs:grid-cols-1  sm:grid-cols-1 sm:space-y-9 xs:space-y-3 sm:flex-col md:flex-row  flex container mx-auto px-14 ">
        <div className="  flex justify-between items-center  z-[600] relative  mb-8  ">
            <div className="w-[150px]  top-0 absolute text-2x font-bold"><img src="../public/phonepay/phonepay01.svg" alt="" /></div>
      </div>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Section 1 */}
        <div className=' rounded-xl'>
          <button
            className="w-full   text-left"
            onClick={() => handleToggle(0)}
          >
            <h4 className="font-bold text-black">Business Solution</h4>
          </button>
          <div className={`${openSection === 0 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
              <li><a href="#" className="hover:text-violet-600">Payment Gateway</a></li>
              <li><a href="#" className="hover:text-violet-600">Guardian by PhonePe</a></li>
              <li><a href="#" className="hover:text-violet-600">Express Checkout</a></li>
              <li><a href="#" className="hover:text-violet-600">PhonePe Switch</a></li>
              <li><a href="#" className="hover:text-violet-600">Offline Merchant</a></li>
              <li><a href="#" className="hover:text-violet-600">Advertise on PhonePe</a></li>
              <li><a href="#" className="hover:text-violet-600">SmartSpeaker</a></li>
              <li><a href="#" className="hover:text-violet-600">PhonePe Lending</a></li>
              <li><a href="#" className="hover:text-violet-600">POS Machine</a></li>
              <li><a href="#" className="hover:text-violet-600">Payment Links</a></li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <button
            className=" w-full text-left"
            onClick={() => handleToggle(1)}
          >
            <h4 className="font-bold text-black">Insurance</h4>
          </button>
          <div className={`${openSection === 1 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
            <li><a href="#" className="hover:text-violet-600">Motor Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">Bike Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">Car Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">Health Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">Arogya Sanjeevani Policy</a></li>
              <li><a href="#" className="hover:text-violet-600">Life Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">Term Life Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">Personal Accident Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-violet-600">International Travel Insurance</a></li>
            </ul>
          </div>
        </div>
      {/* Section 3 */}
      <div>
          <button
            className=" w-full text-left"
            onClick={() => handleToggle(2)}
          >
            <h4 className="font-bold text-black">Investments</h4>
          </button>
          <div className={`${openSection === 2 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
              <li><a href="#" className="hover:text-violet-600">24K Gold</a></li>
              <li><a href="#" className="hover:text-violet-600">Liqiud Funds</a></li>
              <li><a href="#" className="hover:text-violet-600">Tax Saving Funds</a></li>
              <li><a href="#" className="hover:text-violet-600">Equity Funds</a></li>
              <li><a href="#" className="hover:text-violet-600">Debt Funds</a></li>
              <li><a href="#" className="hover:text-violet-600">Hybrid Funds</a></li>
            </ul>
          </div>
        </div>
        {/* Section 3 */}
        <div>
          <button
            className=" w-full text-left"
            onClick={() => handleToggle(3)}
          >
            <h4 className="font-bold text-black">General</h4>
          </button>
          <div className={`${openSection === 3 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
              <li><a href="#" className="hover:text-violet-600">About Us</a></li>
              <li><a href="#" className="hover:text-violet-600">Careers</a></li>
              <li><a href="#" className="hover:text-violet-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-violet-600">Press</a></li>
              <li><a href="#" className="hover:text-violet-600">Ethics</a></li>
              <li><a href="#" className="hover:text-violet-600">Report Vulnerability</a></li>
              <li><a href="#" className="hover:text-violet-600">Merchant Partners</a></li>
              <li><a href="#" className="hover:text-violet-600">Blog</a></li>
              <li><a href="#" className="hover:text-violet-600">Tech Blog</a></li>
              <li><a href="#" className="hover:text-violet-600">PhonePe Pluse</a></li>
            </ul>
          </div>
        </div>
        {/* Section 3 */}
        <div>
          <button
            className=" w-full text-left"
            onClick={() => handleToggle(4)}
          >
            <h4 className="font-bold text-black">Legal</h4>
          </button>
          <div className={`${openSection === 4 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
              <li><a href="#" className="hover:text-violet-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-violet-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-violet-600">Grievance Policy</a></li>
              <li><a href="#" className="hover:text-violet-600">How to Pay</a></li>
              <li><a href="#" className="hover:text-violet-600">E-Waste Policy</a></li>
              <li><a href="#" className="hover:text-violet-600">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-violet-600">Global Anti-Corruption Policy</a></li>
            </ul>
          </div>
        </div>{/* Section 3 */}
        <div>
          <button
            className=" w-full text-left"
            onClick={() => handleToggle(5)}
          >
            <h4 className="font-bold text-black">PhonePe Group</h4>
          </button>
          <div className={`${openSection === 5 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
              <li className='flex'><a href="#" className="hover:text-violet-600">Indus Appstore <img className='w-[10px] h-[20px]' src='../public/phonepay/phonepay53.svg'/></a></li>
              <li><a href="#" className="hover:text-violet-600">Share.Market<img className='w-[10px] h-[20px]' src='../public/phonepay/phonepay53.svg'/></a></li>
              <li><a href="#" className="hover:text-violet-600">Pincode <img className='w-[10px] h-[20px]' src='../public/phonepay/phonepay53.svg'/></a></li>
            </ul>
            <div className="sm:hidden md:block ">
          <button
            className=" w-full text-left"
            onClick={() => handleToggle(6)}
          >
            <h4 className="font-bold text-black">Certification</h4>
          </button>
          <div className={`${openSection === 6 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
              <img className='' src='../public/phonepay/phonepay54.png'/>
            </ul>
          </div>
        </div>
          </div>
        </div>{/* Section 3 */}
        <div className="sm:block md:hidden ">
          <button
            className="w-full text-left"
            onClick={() => handleToggle(7)}
          >
            <h4 className="font-bold text-black">Certification</h4>
          </button>
          <div className={`${openSection === 7 ? 'block' : 'hidden'} md:block`}>
            <ul className="mt-4 text-sm text-gray-500 space-y-4">
              <img className='' src='../public/phonepay/phonepay54.png'/>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-8 text-center text-xl text-gray-500">
        © {new Date().getFullYear()}, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
