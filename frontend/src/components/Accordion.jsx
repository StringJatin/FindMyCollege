import React, { useState } from "react";

const Accordion = ({ items, multiExpand = false }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (multiExpand) {
      // Allow multiple sections to be expanded
      setExpandedItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Collapse if already expanded
          : [...prev, index]
      );
    } else {
      // Allow only one section to be expanded at a time
      setExpandedItems((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-2 px-4 flex justify-between items-center bg-gray-100"
            onClick={() => toggleItem(index)}
          >
            <span className="text-gray-800 font-semibold">{item.question}</span>
            <span className="text-gray-600">
              {expandedItems.includes(index) ? "−" : "+"}
            </span>
          </button>
          {expandedItems.includes(index) && (
            <div className="p-4 text-gray-600 bg-white">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
