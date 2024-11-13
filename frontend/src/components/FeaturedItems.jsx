import React from 'react';
import Card from './Card';

const FeaturedItems = () => {
  const items = [
    {
      image: '/dcu-image.jpg',
      userImage: '/student-avatar.jpg',
      userType: 'Student',
      title: 'College Ranking',
      time: '1h 53m',
      rating: '4.9',
      actionText: 'View'
    },
    {
      image: '/comparison-image.jpg',
      userImage: '/user-avatar.jpg',
      userType: 'User',
      title: 'Product Comparison',
      time: '59m',
      rating: '4.3',
      actionText: 'Select'
    },
    {
      image: '/search-image.jpg',
      userImage: '/college-avatar.jpg',
      userType: 'College',
      title: 'Job Search',
      time: 'Input',
      rating: 'Match',
      actionText: 'View'
    },
    {
      image: '/settings-image.jpg',
      userImage: '/user-avatar-2.jpg',
      userType: 'User',
      title: 'Search Settings',
      time: '1h 17m',
      rating: '4.1',
      actionText: 'Customize'
    }
  ];

  return (
    <div className="bg-black p-8">
      <h2 className="text-white text-3xl font-medium mb-6">Featured Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
