import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import * as constants from '../constants/constants';

const FilterView = ({ setSortOption, setView }) => {
  const handleSortChange = (sortBy) => {
    setSortOption(sortBy);
  };

  const handleViewChange = (view) => {
    setView(view);
  }; // Add closing brace here

  return (
    <div className='filter-top mb-20'>
      <div className='container'>
        <div className='filter-top-content py-3 flex align-center justify-between bg-secondary-white px-3 border-black border-b rounded-sm'>
          <div className='filter-top-sort flex align-center'>
            <p className='fs-13 text-dark'>Sort By:</p>
            <select
              className='fs-13 mx-2 filter-select'
              onChange={(event) => handleSortChange(event.target.value)}
            >
              <option value={constants.BEST_MATCH}>Best Match</option>
              <option value={constants.LOW_TO_HIGH}>Price low to high</option>
              <option value={constants.HIGH_TO_LOW}>Price high to low</option>
            </select>
          </div>
          <div className='filter-top-view flex align-center'>
            <p className='op-07 text-dark fs-13'>View: </p>
            <button 
              type="button" 
              className="grid-btn ml-2" 
              title="Grid View" 
              onClick={() => handleViewChange('grid')}
            >
              <BsFillGridFill />
            </button>
            <button 
              type="button" 
              className="list-btn ml-2" 
              title="List View" 
              onClick={() => handleViewChange('list')}
            >
              <FaThList />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterView;
