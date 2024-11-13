import React from 'react';
import { AccessTime, Star, Bookmark } from '@mui/icons-material';

const Card = ({ image, userImage, userType, title, time, rating, actionText }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute top-4 right-4">
          <div className="bg-black rounded-full p-2">
            <Bookmark className="w-4 h-4 text-white" />
          </div>
        </div>
        {userImage && (
          <div className="absolute bottom-0 left-0 right-0 p-2">
            <div className="flex items-center gap-2 bg-black/70 rounded-full py-1 px-3 w-fit">
              <img src={userImage} alt={userType} className="w-8 h-8 rounded-full" />
              <span className="text-white">{userType}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 space-y-4">
        <h3 className="text-white text-xl">{title}</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
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
          <button className="bg-[#2C2C2C] text-white px-4 py-1 rounded-md">
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedColleges = () => {
  const colleges = [
    {
      image: 'https://images.hindustantimes.com/img/2024/07/26/1600x900/The-Delhi-high-court-ordered-Delhi-university-to-r_1684917445602_1721992243121.jpg',
      userImage: '/student-avatar.jpg',
      userType: 'Student',
      title: 'University of Delhi',
      time: '1h 53m',
      rating: '4.9',
      actionText: 'View'
    },
    {
      image: 'https://www.manufacturingtodayindia.com/cloud/2024/07/28/iit-delhi.jpg',
      userImage: '/user-avatar.jpg',
      userType: 'User',
      title: 'Indian Institute of Technology Delhi',
      time: '59m',
      rating: '4.3',
      actionText: 'Select'
    },
    {
      image: 'https://contentstatic.techgig.com/photo/112571356/unlock-new-opportunities-iit-bombay-launches-tailored-courses-for-busy-professionals.jpg?867206',
      userImage: '/college-avatar.jpg',
      userType: 'College',
      title: 'Indian Institute of Technology Bombay ',
      time: 'Input',
      rating: '3.35',
      actionText: 'View'
    },
    {
      image: 'https://content3.jdmagicbox.com/comp/indore/n2/0731px731.x731.160827114806.c1n2/catalogue/symbiosis-university-of-applied-sciences-super-corridor-indore-institutes-for-automobile-engineering-20obl6a2mt.jpg',
      userImage: '/user-avatar-2.jpg',
      userType: 'User',
      title: 'Symbiosis University of Applied Sciences, Indore',
      time: '1h 17m',
      rating: '4.1',
      actionText: 'Customize'
    }
  ];

  return (
    <div className="bg-black p-8">
      <h2 className="text-white text-3xl font-medium mb-6">Featured Colleges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {colleges.map((college, index) => (
          <Card key={index} {...college} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedColleges;
