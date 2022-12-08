import React from "react";

function SelectByRegion({ onSelect }) {
  function handler(e) {
    const regionName = e.target.value;
    onSelect(regionName);
  }

  return (
    <>
      <select
        aria-label="Regions"
        className="p-3 transition-all shadow-md rounded-md w-48 bg-white dark:bg-slate-800 dark:text-gray-200"
        onChange={handler}
      >
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </>
  );
}

export default SelectByRegion;
