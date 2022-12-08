import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { flag, name, population, region, capital } = props;

  return (
    <div className="bg-white dark:bg-slate-800 overflow-hidden rounded-lg shadow-lg text-sm hover:scale-105 transition-all">
      <Link to={`/${name}`} className="block">
        <img
          className="w-full h-full object-cover block"
          src={flag}
          alt={`${name}'s flag`}
          loading="lazy"
        />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">{name}</h2>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h3 className="text-gray-900 dark:text-gray-200 font-medium">
                Population:
              </h3>
              <p className="text-gray-600 font-normal dark:text-gray-400">
                {population}
              </p>
            </div>
            <div className="flex gap-2">
              <h3 className="text-gray-900 font-medium dark:text-gray-200">
                Region:
              </h3>
              <p className="text-gray-600 font-normal dark:text-gray-400">
                {region}
              </p>
            </div>
            <div className="flex gap-2">
              <h3 className="text-gray-900 font-medium dark:text-gray-200">
                Capital:{" "}
              </h3>
              <p className="text-gray-600 font-normal dark:text-gray-400">
                {capital}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
