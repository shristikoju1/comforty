import { useSelector, useDispatch } from "react-redux";
import Heart from "../assets/svg/heart.svg?react";
import { addItemToFav, removeItemFromFav } from "../Store/favSlice";

const Favourite = () => {
  const favItems = useSelector((state) => state.fav?.items || []);

  const dispatch = useDispatch();

  const toggleLike = (item) => {
    if (favItems.some((favItem) => favItem.id === item.id)) {
      dispatch(removeItemFromFav(item));
    } else {
      dispatch(addItemToFav(item));
    }
  };

  return (
    <div className="flex flex-col items-center justify-between text-center">
      
      <div className="flex items-center justify-center my-10">
        <h2 className="mr-4 text-4xl font-bold">Your Favorites</h2>
        <Heart fill="red" className='h-[55px] w-[55px]'/>
      </div>
      <div className="flex flex-wrap justify-center">
        {favItems.length > 0 ? (
          favItems.map((item) => (
            <div key={item.id} className="relative p-4">
            <img src={item.image} alt={item.title} className="w-auto" />
            <p className="font-normal text-[15px] leading-[20.8px] font-inter">
              {item.title}
            </p>
            <span className="font-semibold text-medium font-inter">
              {item.price}
            </span>
            <div
              className="absolute p-2 cursor-pointer right-2 top-2"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '20%' }}
              onClick={() => toggleLike(item)}
            >
              <Heart fill="black" stroke='none' style={{ width: '16px', height: '16px' }} /> 
            </div>
          </div>
          
          ))
        ) : (
          <div className="flex flex-col items-center">
            <p>No items in your favorites yet!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourite;