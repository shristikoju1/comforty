import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center max-width">
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="#029FAE"
      strokeWidth="5"
      animationDuration="2"
      ariaLabel="rotating-lines-loading"
    />
  </div>
)
}

export default Loader