import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(input);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex transition-all dark:text-gray-200 shadow-md overflow-hidden gap-2 items-center bg-white dark:bg-slate-800 rounded-md pl-3 w-full md:w-96"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          aria-label="Search country"
          placeholder="Search for a country..."
          type="text"
          name="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="py-3 pl-3 w-full dark:bg-slate-800 outline-none transition-all"
        />
      </form>
    </>
  );
}

export default SearchBox;
