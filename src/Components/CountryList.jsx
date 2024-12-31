import CountryCard from "./CountryCard";

const CountryList = () => {
  return (
    <div className="mt-6 grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <CountryCard />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <CountryCard />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <CountryCard />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <CountryCard />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <CountryCard />
      </div>
    </div>
  );
};

export default CountryList;
