import React from 'react';

const Fcard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm text-center rounded-2xl overflow-hidden hover:shadow-2xl border-black-[3px] bg-white hover:shadow-violet-500 cursor-pointer">
      <div className='w-full h-[fit-content] flex justify-center items-center'>
      <div className='look w-[90%] h-[6px] bg-purple-400 '></div></div>
        <div className='w-[90%] p-4 m-3 flex justify-center items-center rounded-xl  border-gray-300'>
      <img className="h-48 rounded-[100%] object-contain" src={image} alt={title} /></div>

      <div className="px-6 py-4 space-y-4">
        <div className="font-bold text-2xl text-violet-600 mb-2">{title}</div>
        <p className="text-black ">
          {description}
        </p>
        <button className='text-violet-600 font-bold my-3'>Read More</button>
      </div>
    </div>
  );
};

export default Fcard;
