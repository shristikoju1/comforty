import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../../assets/svg/cart_featureproduct.svg?react';
import Heart from '../../assets/svg/heart.svg?react';
import { useState, useEffect } from 'react';
import { addItemToFav, removeItemFromFav } from '../../Store/favSlice';


const ProductCard = ({ product, index, activeProductIndex, hoverColor, onAddToCart }) => {
  
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    if (isLiked) {
      dispatch(addItemToFav(product));
    } else {
      dispatch(removeItemFromFav(product));
    }
  }, [isLiked, product, dispatch]);

  return (
    <div key={index} className="inline-block">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-auto"
        />
        <div
          className="absolute p-2 cursor-pointer right-1 top-1"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '20%' }}
          onClick={toggleLike}
        >
          <Heart fill={isLiked ? 'black' : 'white'} />
        </div>
      </div>
      <div className="flex justify-between w-full mt-3">
        <div>
          <p
            className="font-normal text-[15px] leading-[20.8px] font-inter"
            style={{
              color: activeProductIndex === index ? hoverColor : 'black',
            }}
          >
            {product.title}
          </p>
          <span className="font-semibold text-medium font-inter">
            {product.price}
          </span>
        </div>
        <div className="cursor-pointer cart-bg"
          onClick={() => onAddToCart(index)}
        >
          <Cart />
        </div>
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
