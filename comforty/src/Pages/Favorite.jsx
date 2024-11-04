import { useSelector, useDispatch } from "react-redux";
import Heart from "../assets/svg/heart.svg?react";
import { addItemToFav, removeItemFromFav } from "../Store/favSlice";
import Cart from "../assets/svg/cart_featureproduct.svg?react";
import Title from "@/Common/Title";
import ProductCard from "../Common/ProductCard";
import { toast } from "react-toastify";
import { addItemToCart } from "../Store/cartSlice";

const hoverColor = "#007580";

const Favourite = () => {
  const favItems = useSelector((state) => state.fav?.items || []);
  const dispatch = useDispatch();

  const addToCart = (selectedProduct) => {
    dispatch(addItemToCart(selectedProduct));
    toast.success(`Added to cart!`);
  };

  return (
    <div className="flex flex-col items-center justify-between py-5 max-width">
      <Title title="Your Favourites" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {favItems.length > 0 ? (
          favItems.map((item, idx) => (
            <ProductCard
              key={item.id}
              product={{
                ...item,
                image: item.image,
                title: item.title,
                price: item.price,
                apiSource: item.apiSource,
              }}
              index={idx}
              hoverColor={hoverColor}
              onAddToCart={() => addToCart(item)} // Pass the entire product item
            />
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
