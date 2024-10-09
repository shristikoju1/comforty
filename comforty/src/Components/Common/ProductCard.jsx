import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../../assets/svg/cart_featureproduct.svg?react";
import Heart from "../../assets/svg/heart.svg?react";
import { addItemToFav, removeItemFromFav } from "../../Store/favSlice";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({ product, index, hoverColor, onAddToCart, view }) => {
  const dispatch = useDispatch();


  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    let apiUrl;

    // Check the current page and set the appropriate API URL
    if (location.pathname.includes("/categories")) {
      apiUrl = `https://api.escuelajs.co/api/v1/products/${product.id}`;
    } else {
      apiUrl = `https://dummyjson.com/products/${product.id}`;
    }

    console.log("url:", apiUrl);

    navigate(`/product-page/${product.id}`, {
      state: { from: location, apiUrl }, // Pass the API URL to the ProductPage
    });
    window.scrollTo(0, 0);
  };

  // added to favourite check
  const isFavorited = useSelector((state) =>
    state.fav.items.some((item) => item.id === product.id)
  );

  // added to cart check
  const isInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === product.id)
  );

  const toggleLike = () => {
    if (isFavorited) {
      dispatch(removeItemFromFav(product));
    } else {
      dispatch(addItemToFav(product));
    }
  };

  return (
<div
  key={product.id}
  className={`hover:p-2 hover:shadow-md hover:translate-y-1 transition-all 0.3s ease-in-out cursor-pointer shadow-md rounded-lg p-2 ${
    view === 'grid' ? 'grid-class' : 'list-class'
  }`}
>
      <div className="relative">
        <div onClick={handleClick}>
          <img
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "100%",
            }}
          />
        </div>

        <button
          className="absolute p-2 cursor-pointer right-1 top-1"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "20%",
          }}
          onClick={toggleLike}
        >
          <Heart
            fill={isFavorited ? "red" : "white"}
            className={isFavorited ? "text-red-500" : "text-black"}
          />
        </button>
      </div>
      <div className="flex justify-between w-full mt-3">
        <div>
          <p
            className="font-normal text-[15px] leading-[20.8px] font-inter"
            style={{
              color: isInCart ? hoverColor : "black",
            }}
          >
            {product.title}
          </p>
          <span className="font-semibold text-medium font-inter">
            ${product.price}
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
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  activeProductIndex: PropTypes.number,
  hoverColor: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
