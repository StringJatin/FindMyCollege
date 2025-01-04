import React, { useState } from "react";

const FilterButton = ({
  options = ["Public", "Private", "Government Funded", "All"],
  defaultOption = 0,
}) => {
  const [selected, setSelected] = useState(defaultOption);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="flex justify-center gap-4 mt-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(index)}
          className={`px-6 py-2 rounded-full border-2 text-sm font-bold transition 
            ${
              selected === index
                ? "bg-custom-secondary text-white border-blue-500"
                : "bg-custom-primary text-blue-500 border-blue-500 hover:bg-blue-100"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
