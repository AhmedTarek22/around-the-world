import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CountryCard = ({ name, population, region, capital, flag }) => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <Link to={`${name}`}>
      <div className="h-full rounded bg-white p-3 pb-9 shadow-md dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src={flag}
          alt="Country image"
          loading="lazy"
        />
        <h2 className="mb-4 ms-3 text-lg font-extrabold">{name}</h2>
        <div className="ms-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">{translate.Population}: </span>
            <span className="font-light">{population}</span>
          </p>
          <p>
            <span className="font-semibold">{translate.Region}: </span>
            <span className="font-light">{region}</span>
          </p>
          <p>
            <span className="font-semibold">{translate.Capital}: </span>
            <span className="font-light">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
