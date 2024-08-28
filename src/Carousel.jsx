import React, { useState } from 'react';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: 'BSFI Best Brand 2024',
      description: 'ET Edge 7th edition best BSFI Brand 2024 ',
      image: '../public/phonepay/phonepay30.png',

    },
    {
      id: 2,
      title: 'Best Fintech App 2024',
      description: 'Best Mobile & App Award Category at IAMAI 14th Indian Digital Awards 2024',
      image: '../public/phonepay/phonepay31.png',
    },
    {
      id: 3,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    },
    {
      id: 4,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    }, {
      id: 5,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    }, {
      id: 6,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    }, {
      id: 7,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    }, {
      id: 8,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    }, {
      id: 9,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    }, {
      id: 10,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    }, {
      id: 11,
      title: 'Best Payment Fintech',
      description: 'Bharat Fintech Summit 2024 for excellence in the Payment space',
      image: '../public/phonepay/phonepay32.png',
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative z-[600] py-[50px] w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-full">
              <div className="bg-white shadow-md rounded-lg text-center p-4">
                  <img src={card.image} alt={card.title} className="md:w-[30%] xs:w-[80%] xs:mx-[50px] sm:w-[80%]  sm:mx-[60px] border border-gray-400 md:mx-[300px] h-48 object-contain rounded-md" />
                <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute border-2 border-gray-300 top-1/2 left-0 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute border-2 border-gray-300 top-1/2 right-0 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default CardCarousel;
