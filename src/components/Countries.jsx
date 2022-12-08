import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import SelectByRegion from "./SelectByRegion";
import Loading from "./Loading";
import humanize from "humanize-number";

function Countries() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountryByName(name) {
    try {
      const res = await fetch(`https://restcountries.com/v2/name/${name}`);
      if (!res.ok) throw new Error("Could not found any country");

      const data = await res.json();
      setLoading(false);
      setCountries(data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  async function getCountryByRegion(region) {
    try {
      const res = await fetch(`https://restcountries.com/v2/region/${region}`);
      if (!res.ok) throw new Error("Could not found any countries");

      const data = await res.json();
      setLoading(false);
      setCountries(data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  const getCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v2/all");
      if (!res.ok) throw new Error("Could not be loaded");

      const data = await res.json();
      setLoading(false);
      setCountries(data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="mb-14 flex flex-col gap-4 md:justify-between md:flex-row">
        <SearchBox onSearch={getCountryByName} />
        <SelectByRegion onSelect={getCountryByRegion} />
      </div>
      {loading && !error && (
        // <h4 className="text-2xl text-blue-600 font-medium">Loading...</h4>
        <Loading />
      )}
      {!loading && error && (
        <h4 className="text-2xl text-red-600 mb-4 font-medium">{error}</h4>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {countries?.map((c, index) => {
          return (
            <Card
              key={index}
              flag={c.flags.png}
              name={c.name}
              population={humanize(c.population)}
              region={c.region}
              capital={c.capital}
            />
          );
        })}
      </div>
    </>
  );
}

export default Countries;
