import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../../assets/svg/cart_featureproduct.svg?react';
import Heart from '../../assets/svg/heart.svg?react';
import { addItemToFav, removeItemFromFav } from '../../Store/favSlice';

const ProductCard = ({ product, index, activeProductIndex, hoverColor, onAddToCart }) => {
  const dispatch = useDispatch();

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
    <div key={product.id} className="">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          width='100%'
        />
        <div
          className="absolute p-2 cursor-pointer right-1 top-1"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '20%' }}
          onClick={toggleLike}
        >
          <Heart fill={isFavorited ? 'black' : 'white'} />
        </div>
      </div>
      <div className="flex justify-between w-full mt-3">
        <div>
          <p
            className="font-normal text-[15px] leading-[20.8px] font-inter"
            style={{
              color: isInCart ? hoverColor : 'black',
            }}
          >
            {product.title}
          </p>
          <span className="font-semibold text-medium font-inter">
            {product.price}
          </span>
        </div>
        <div
          className={`cursor-pointer ${isInCart ? 'bg-hover-color text-white' : 'white'} cart-bg`}
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