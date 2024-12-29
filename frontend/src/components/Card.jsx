import React from 'react';
import { AccessTime, Star, Bookmark } from '@mui/icons-material';

const Card = ({ image, userImage, userType, title, time, rating, actionText }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>⭐</span>
            <span>{rating}</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

