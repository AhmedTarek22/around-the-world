import "./Loader.css";

const Loader = () => {
  return (
    <div className="absolute spinner left-1/2 top-40 h-5 w-5 -translate-x-1/2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
