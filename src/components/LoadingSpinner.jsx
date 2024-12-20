import "bootstrap/dist/css/bootstrap.min.css";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner m-5 p-5">
      <div
        className="spinner-border text-white"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading ...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
