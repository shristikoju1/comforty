import { useSelector } from "react-redux";
import Heart from "../assets/svg/heart.svg?react";

const Favourite = () => {
  const favItems = useSelector((state) => state.fav?.items || []);

  return (
    <div className="flex flex-col items-center justify-between text-center">
      
      <div className="flex my-10">
        <h2 className="text-xl font-bold">Your Favorites</h2>
        <Heart fill="red" />
      </div>
      <div className="flex flex-wrap justify-center">
        {favItems.length > 0 ? (
          favItems.map((item) => (
            <div key={item.id} className="p-4">
              <img src={item.image} alt={item.title} className="w-auto" />
              <p className="font-normal text-[15px] leading-[20.8px] font-inter">
                {item.title}
              </p>
              <span className="font-semibold text-medium font-inter">
                {item.price}
              </span>
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
