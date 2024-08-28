import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden justify-center items-center align-middle bg-white cursor-pointer">
        <div className='w-[90%] p-4 m-3 flex justify-center items-center rounded-xl border-[1px] border-gray-300'>
      <img className="h-48 object-contain" src={image} alt={title} /></div>

      <div className="px-6 py-4">
        <div className="font-bold text-2xl text-violet-600 mb-2">{title}</div>
        <p className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
