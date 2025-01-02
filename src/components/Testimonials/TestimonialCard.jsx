import React from 'react';
// import { StarIcon } from '@heroicons/react/solid';

const TestimonialCard = ({ name, image, rating, text }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex flex-col items-center mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="flex space-x-1 mt-2">
          {[...Array(rating)].map((_, i) => (
            // <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-300">"{text}"</p>
    </div>
  );
};

export default TestimonialCard; 