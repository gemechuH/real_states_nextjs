import ClipLoader  from "react-spinners/ClipLoader";
const LoadingPage = () => {
    const cssOverRide = {
        display: "block",
        margin: "100px auto"
    }
  return <ClipLoader
  color='3b82f6'
  
  cssOverride={cssOverRide}
  size={150}
  aria-label="Loading Spinner"
  
/>;
};

export default LoadingPage;
