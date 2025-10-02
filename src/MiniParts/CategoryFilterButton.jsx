import React, { useState } from "react";

function CategoryFilterButton({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    // if (value === "All") {
    //   setSelectedCategories([]);
    //   onFilterChange([]); // reset filter
    //   return;
    // }

    let updated = [...selectedCategories];
    if (updated.includes(value)) {
      updated = updated.filter((c) => c !== value);
    } else {
      updated.push(value);
    }

    setSelectedCategories(updated);
    onFilterChange(updated);
  };

  return (
    <div className="max-w-[34%] p-2 text-left rounded-md bg-white z-200 fixed top-16 right-30 shadow-lg">
      {/* <div>
        <input type="checkbox" value="All" onChange={handleCheckboxChange} />
        <label>All</label>
      </div> */}
      <div>
        <input id="b" type="checkbox" value="B" onChange={handleCheckboxChange} />
        <label htmlFor="b">Beverages</label>
      </div>
      <div>
        <input id="d" type="checkbox" value="D" onChange={handleCheckboxChange} />
        <label htmlFor="d">Decoration</label>
      </div>
      <div>
        <input id="f" type="checkbox" value="F" onChange={handleCheckboxChange} />
        <label htmlFor="f">Fashion</label>
      </div>
      <div>
        <input id="g" type="checkbox" value="G" onChange={handleCheckboxChange} />
        <label htmlFor="g">Groceries</label>
      </div>
      <div>
        <input id="h" type="checkbox" value="H" onChange={handleCheckboxChange} />
        <label htmlFor="h">Home</label>
      </div>
      <div>
        <input id="s" type="checkbox" value="S" onChange={handleCheckboxChange} />
        <label htmlFor="s">Snacks</label>
      </div>
    </div>
  );
}

export default CategoryFilterButton;
