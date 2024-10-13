import { useSelector, useDispatch } from "react-redux";
import Heart from "../assets/svg/heart.svg?react";
import { addItemToFav, removeItemFromFav } from "../Store/favSlice";
import Cart from "../assets/svg/cart_featureproduct.svg?react";
import Title from "@/Common/Title";

const hoverColor = "#007580";

const Favourite = ({ onAddToCart, index }) => {
  const favItems = useSelector((state) => state.fav?.items || []);

  const dispatch = useDispatch();

  const toggleLike = (item) => {
    if (favItems.some((favItem) => favItem.id === item.id)) {
      dispatch(removeItemFromFav(item));
    } else {
      dispatch(addItemToFav(item));
    }
  };

  const isInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === item.id)
  );

  return (
    <div className="flex flex-col items-center justify-between py-5 text-center">
      <Title title="Your Favourites"/>
      <div className="flex flex-wrap justify-center">
        {favItems.length > 0 ? (
          favItems.map((item) => (
            <div key={item.id} className="relative p-4">
              <img
                src={item?.image || item?.thumbnail || item?.category.image}
                alt={item.title}
                width={300}
                height={300}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                }}
              />

              <button
                className="absolute p-2 cursor-pointer right-6 top-6"
                onClick={() => toggleLike(item)}
              >
                <Heart fill="red" className="text-red-500" />
              </button>

              <div className="flex justify-between w-full mt-3">
                <div className="flex flex-col items-start">
                  <p
                    className="font-normal text-[15px] leading-[20.8px] font-inter"
                    style={{
                    color: isInCart ? hoverColor : 'black',
                    }}
                  >
                    {item.title}
                  </p>
                  <span className="font-semibold text-medium font-inter">
                    ${item.price}
                  </span>
                </div>

                <button
                  className={`cursor-pointer ${
                    isInCart ? "bg-hover-color text-white" : "white"
                  } cart-bg`}
                  onClick={() => !isInCart && onAddToCart(index)}
                  disabled={isInCart}
                >
                  <Cart />
                </button>
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
