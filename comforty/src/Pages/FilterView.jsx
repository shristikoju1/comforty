import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import * as constants from "@/constants/constants";

const FilterView = ({ setSortOption, setView }) => {
  const handleSortChange = (sortBy) => {
    // console.log("Sort option selected:", sortBy);
    setSortOption(sortBy);
  };

  const handleViewChange = (view) => {
    setView(view);
  }; 

  return (
    <div className="mb-20 filter-top">
      <div className="container">
        <div className="flex justify-between px-3 py-3 border-b border-black rounded-sm filter-top-content align-center bg-secondary-white">
          <div className="flex filter-top-sort align-center">
            <p className="fs-13 text-dark">Sort By:</p>
            <select
              className="mx-2 fs-13 filter-select"
              // value={}
              onChange={(event) => {handleSortChange(event.target.value) 
              }}
            >
              <option value={constants.BEST_MATCH}>Best Match</option>
              <option value={constants.LOW_TO_HIGH}>Price low to high</option>
              <option value={constants.HIGH_TO_LOW}>Price high to low</option>
            </select>{" "}
          </div>
          <div className="flex filter-top-view align-center">
            <p className="op-07 text-dark fs-13">View: </p>
            <button
              type="button"
              className="ml-2 grid-btn"
              title="Grid View"
              onClick={() => handleViewChange("grid")}
            >
              <BsFillGridFill />
            </button>
            <button
              type="button"
              className="ml-2 list-btn"
              title="List View"
              onClick={() => handleViewChange("list")}
            >
              <FaThList />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterView;
