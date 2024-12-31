import { useSelector } from "react-redux";

const CountryCard = () => {
  const translate = useSelector((state) => state.language.translation);

  return (
    <a href="#">
      <div className="h-full rounded bg-gray-100 p-3 pb-9 shadow-md dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src="https://placehold.co/1280x720"
          alt="Country image"
          loading="lazy"
        />
        <h2 className="mb-4 ms-3 text-lg font-extrabold">Egypt</h2>
        <div className="ms-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">{translate.Population}: </span>
            <span className="font-light">400000</span>
          </p>
          <p>
            <span className="font-semibold">{translate.Region}: </span>
            <span className="font-light">Afirca</span>
          </p>
          <p>
            <span className="font-semibold">{translate.Capital}: </span>
            <span className="font-light">Afirca</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default CountryCard;
