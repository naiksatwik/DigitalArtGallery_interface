// Card.jsx
import React from 'react';

const ArtworkCard = ({key,image, title, price, size, onRemove }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700">
      {/* Image Section */}
      <div>
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      </div>

      {/* Content Section */}
      <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold text-gray-900 ">{title}</h5>
        <p className="mb-2 text-black dark:text-gray-400">Price: ₹{price}</p>
        {/* <p className="mb-4 text-black dark:text-gray-400">id: {key}</p> */}
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-red-600 text-white  py-2 px-8 rounded-3xl transition" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
