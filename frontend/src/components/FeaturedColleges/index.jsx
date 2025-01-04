import Card from "../Card";
import { colleges } from "./Constants";

const FeaturedColleges = () => {
  

  return (
    <div className="bg-custom-primary p-8">
      <div className="mb-6">
      <h2 className="font-color text-3xl font-bold ">Featured Colleges</h2>
      <span className="text-gray-500">Explore the most prestigious colleges across the country curated for you.</span>
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


export default FeaturedColleges;