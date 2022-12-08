import React from "react";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <header className="py-6 bg-white shadow-md dark:bg-slate-800 dark:text-white transition-all">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <h1 className="md:text-2xl font-bold text-sm" href="#">
          Where in the world?
        </h1>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center gap-1 font-medium text-xs md:text-base"
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
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;
