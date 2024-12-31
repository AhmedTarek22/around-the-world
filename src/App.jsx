import { Provider } from "react-redux";
import Header from "./Components/Header";
import RegionMenu from "./Components/RegionMenu";
import SearchInput from "./Components/SearchInput";
import { store } from "./Redux/store";
import CountryList from "./Components/CountryList";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <div className="container mx-auto px-5 md:px-0">
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput />
            <RegionMenu />
          </div>
          <CountryList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
