import React from 'react';

const ProductCard = ({ title, icon: Icon, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
      <div className="mb-4 flex justify-center">
        <Icon className="w-16 h-16 text-blue-600" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
        {title}
      </h3>
      
      <p className="text-gray-600 flex-grow mb-6 text-center">
        {description}
      </p>
      
      <div className="text-center">
        <span className="block text-2xl font-bold text-gray-900 mb-4">
          {price}
        </span>
        
        <button className="w-full bg-red-600 text-white py-3 px-6 rounded-full 
                          hover:bg-red-700 transition-colors duration-300 font-semibold">
          QUIERO ESTA HERRAMIENTA
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 