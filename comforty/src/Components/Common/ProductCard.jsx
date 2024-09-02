import React from 'react';
import PropTypes from 'prop-types';
import Cart from '../../assets/svg/cart_featureproduct.svg?react';

const ProductCard = ({ product, index, activeProductIndex, hoverColor, onAddToCart }) => {
  return (
    <div key={index} className="inline-block">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-auto"
        />
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
        <div
          className="cart-bg"
          onClick={() => onAddToCart(index)}
          // style={{
          //   backgroundColor: activeProductIndex === index ? hoverColor : 'var(--secondary-white)',
          // }}
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
