import Card from "./Card";
const Featured = () => {
  const colleges = [
    {
      image: 'https://images.hindustantimes.com/img/2024/07/26/1600x900/The-Delhi-high-court-ordered-Delhi-university-to-r_1684917445602_1721992243121.jpg',
      title: 'University of Delhi',
      rating: '4.9',
      time: '1h 53m',
    },
    {
      image: 'https://www.manufacturingtodayindia.com/cloud/2024/07/28/iit-delhi.jpg',
      title: 'Indian Institute of Technology Delhi',
      rating: '4.3',
      time: '59m',
    },
    {
      image: 'https://contentstatic.techgig.com/photo/112571356/unlock-new-opportunities-iit-bombay-launches-tailored-courses-for-busy-professionals.jpg',
      title: 'Indian Institute of Technology Bombay',
      rating: '3.35',
      time: 'Input',
    },
    {
      image: 'https://content3.jdmagicbox.com/comp/indore/n2/0731px731.x731.160827114806.c1n2/catalogue/symbiosis-university-of-applied-sciences-super-corridor-indore-institutes-for-automobile-engineering-20obl6a2mt.jpg',
      title: 'Symbiosis University of Applied Sciences, Indore',
      rating: '4.1',
      time: '1h 17m',
    },
  ];

  return (
    <div className="bg-custom-primary p-8">
      <div className="mb-6">
      <h2 className="font-color text-3xl font-bold ">Featured Colleges</h2>
      <span>Explore the most prestigious colleges across the country curated for you.</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {colleges.map((college, index) => (
          <Card
            key={index}
            image={college.image}
            title={college.title}
            rating={college.rating}
            time={college.time}
          />
        ))}
      </div>
    </div>
  );
};


export default Featured;