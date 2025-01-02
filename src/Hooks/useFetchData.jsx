import { useEffect, useState } from "react";

const useFetchData = (country) => {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  const fetchDataFromAPI = () => {
    let url = "https://restcountries.com/v3.1/all";
    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (country) {
          //Country page
          setCountriesData(data[0]);
        } else {
          //Home page
          localStorage.setItem("countries", JSON.stringify(data));
          setCountriesData(data);
          setFilteredCountries(data);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));
    if (data) {
      setCountriesData(data);
      setFilteredCountries(data);
    } else {
      fetchDataFromAPI();
    }
  };

  return {
    countriesData,
    setFilteredCountries,
    filteredCountries,
    isError,
    isLoading,
  };
};

export default useFetchData;
