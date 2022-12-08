import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import humanize from "humanize-number";

function Country() {
  const data = useLoaderData();
  const country = data[0];

  function getLanguages() {
    const languages = country.languages.map((l) => {
      return l.name;
    });
    return languages.join(", ");
  }

  function displayBorderCountries() {
    if (!country.borders)
      return <span className="text-gray-600 dark:text-gray-400">None</span>;
    const borders = country.borders.map((c, index) => {
      return (
        <li
          className="bg-white dark:bg-slate-800 dark:text-gray-400 rounded-sm shadow-sm py-2 px-6 inline-block mr-3 text-slate-600 mb-3"
          key={index}
        >
          {c}
        </li>
      );
    });
    return borders;
  }

  return (
    <React.Fragment>
      <Link
        to=".."
        relative="path"
        className="mb-16 transition-all py-3 px-8 bg-white dark:bg-slate-800 dark:text-gray-200 rounded-md shadow-md flex items-center w-40 gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        Go Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-start">
        <div>
          <img
            className="w-full"
            src={country.flag}
            alt={`${country.name}'s flag`}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-10 dark:text-white">
            {country.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <h3 className="text-gray-900 dark:text-gray-100 font-medium">
                  Native Name:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {country.nativeName}
                </p>
              </div>

              <div className="flex gap-3">
                <h3 className="text-gray-900 font-medium dark:text-gray-100">
                  Population:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {humanize(country.population)}
                </p>
              </div>

              <div className="flex gap-3">
                <h3 className="text-gray-900 font-medium dark:text-gray-100">
                  Region:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {country.region}
                </p>
              </div>

              <div className="flex gap-3">
                <h3 className="text-gray-900 font-medium dark:text-gray-100">
                  Sub Region:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {country.subregion}
                </p>
              </div>

              <div className="flex gap-3">
                <h3 className="text-gray-900 font-medium dark:text-gray-100">
                  Capital:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {country.capital}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <h3 className="text-gray-900 font-medium dark:text-gray-100">
                  Top Level Domain:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {country.topLevelDomain}
                </p>
              </div>

              <div className="flex gap-3">
                <h3 className="text-gray-900 font-medium dark:text-gray-100">
                  Currencies:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {country.currencies ? country.currencies[0].name : "N/A"}
                </p>
              </div>

              <div className="flex gap-3">
                <h3 className="text-gray-900 font-medium dark:text-gray-100">
                  Languages:{" "}
                </h3>
                <p className="text-gray-600 font-normal dark:text-gray-300">
                  {getLanguages()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <h4 className="font-medium dark:text-gray-100 shrink-0">
              Border Countries:
            </h4>
            <ul className="flex flex-wrap">{displayBorderCountries()}</ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Country;
