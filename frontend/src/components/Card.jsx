import React from 'react';
import { AccessTime, Star, Bookmark } from '@mui/icons-material';

const Card = ({ image, userImage, userType, title, time, rating, actionText }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute top-4 right-4">
          <div className="bg-black rounded-full p-2">
            <Bookmark className="w-4 h-4 custom-secondary" />
          </div>
        </div>
        {userImage && (
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <div className="flex items-center gap-2 bg-black/70 rounded-full py-1 px-3 w-fit">
              <img src={userImage} alt={userType} className="w-8 h-8 rounded-full" />
              <span className="custom-secondary">{userType}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 space-y-4">
        <h3 className="custom-secondary text-xl">{title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 custom-secondary">
            {time && (
              <div className="flex items-center gap-2">
                <AccessTime className="w-4 h-4" />
                <span>{time}</span>
              </div>
            )}
            {rating && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>{rating}/5</span>
              </div>
            )}
          </div>
          <button className="bg-custom-secondary custom-primary px-4 py-1 rounded-md">
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

