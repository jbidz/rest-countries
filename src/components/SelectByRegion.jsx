import React from "react";

function SelectByRegion({ onSelect }) {
  function handler(e) {
    const regionName = e.target.value;
    onSelect(regionName);
  }

  return (
    <>
      <div className="relative before:content-['⌵'] before:text-2xl before:text-gray-600 dark:before:text-gray-100 before:right-3 before:top-1 w-min before:z-10 before:absolute ">
        <select
          aria-label="Regions"
          className="p-3 pl-6 relative transition-all appearance-none shadow-md rounded-md w-48 bg-white dark:bg-slate-800 dark:text-gray-200"
          onChange={handler}
        >
          <option defaultValue={true} hidden>
            Select by Region
          </option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </>
  );
}

export default SelectByRegion;
