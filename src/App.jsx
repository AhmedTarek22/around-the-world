import { Provider } from "react-redux";
import Header from "./Components/Header";
import RegionMenu from "./Components/RegionMenu";
import SearchInput from "./Components/SearchInput";
import { store } from "./Redux/store";
import CountryList from "./Components/CountryList";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchCountries = () => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCountriesData(data);
        setFilteredCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Provider store={store}>
      <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
        <Header />
        {isError && <p>Something went wrong!</p>}
        {isLoading && <Loader />}
        {!isError && !isLoading && (
          <div className="container mx-auto px-5 md:px-0">
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchInput
                countriesList={countriesData}
                filteredCountriesList={setFilteredCountries}
              />
              <RegionMenu
                countriesList={countriesData}
                filteredCountriesList={setFilteredCountries}
              />
            </div>
            <CountryList countriesData={filteredCountries} />
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;
