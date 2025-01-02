import CountryList from "../Components/CountryList";
import Loader from "../Components/Loader";
import RegionMenu from "../Components/RegionMenu";
import SearchInput from "../Components/SearchInput";
import useFetchData from "../Hooks/useFetchData";
import NoPage from "./NoPage";

const Home = () => {
  const {
    countriesData,
    filteredCountries,
    setFilteredCountries,
    isError,
    isLoading,
  } = useFetchData();

  return (
    <>
      {isError && <NoPage />}
      {isLoading && <Loader />}
      {!isError && !isLoading && (
        <div className="mx-auto px-5 md:px-0">
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
    </>
  );
};

export default Home;
