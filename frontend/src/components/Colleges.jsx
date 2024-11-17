import Card from './Card';
import React from 'react'
import FilterButton from './FilterButton';

const Colleges = () => {
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
        },
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
          },
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
          },
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
    <div className="bg-custom-primary p-8">
    <h2 className="custom-secondary text-3xl font-medium ">Top Colleges For You</h2>
    <FilterButton/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
     {
        colleges.map((college,index)=>{
           return <Card key={index} {...college}/>
        })
     }
    </div>
  </div>
  )
}

export default Colleges;