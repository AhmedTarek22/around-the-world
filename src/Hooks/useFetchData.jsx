import { useEffect, useState } from "react";

const useFetchData = (country) => {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let url = "https://restcountries.com/v3.1/all";
  if (country) {
    url = `https://restcountries.com/v3.1/name/${country}`;
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (country) {
          setCountriesData(data[0]);
        } else {
          setCountriesData(data);
          setFilteredCountries(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    countriesData,
    setFilteredCountries,
    filteredCountries,
    isError,
    isLoading,
  };
};

export default useFetchData;
