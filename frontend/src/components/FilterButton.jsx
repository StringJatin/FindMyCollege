import React, { useState } from 'react';

const FilterButton = ({ options = ['Public', 'Private', 'Government Funded', 'All'], option=0 }) => {
  const [selected, setSelected] = useState(option); 
  console.log(selected);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="bg-custom-primary flex m-auto max-w-50 py-8 justify-start gap-4">
      {options.map((option, index) => (
        <div
          key={index}
          className={`rounded-xl p-2 px-4 cursor-pointer ${
            selected === index ? 'bg-custom-secodary' : 'bg-custom-primary'
          }`}
          onClick={() => handleSelect(option)}
        >
          <h2
            className={`text-lg font-medium ${
              selected === option ? 'custom-primary' : 'custom-secondary'
            }`}
          >
            {option}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FilterButton;
