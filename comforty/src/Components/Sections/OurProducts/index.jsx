import Product1 from '../../../assets/images/our_product1.png';
import Product2 from '../../../assets/images/our_product2.png';
import Product3 from '../../../assets/images/our_product3.png';
import Product4 from '../../../assets/images/our_product4.png';
import Product5 from '../../../assets/images/our_product5.png';
import Product6 from '../../../assets/images/our_product6.png';
import Product7 from '../../../assets/images/our_product7.png';
import Product8 from '../../../assets/images/our_product8.png';
import ProductCard from '../../Common/ProductCard';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../Store/cartSlice'; 

import './ourproduct.scss';

const productData = [
  {
    image: Product1,
    title: 'Library Stool Chair',
    price: '$20',
  },
  {
    image: Product2,
    title: 'Library Stool Chair',
    price: '$35',
  },
  {
    image: Product3,
    title: 'Library Stool Chair',
    price: '$45',
  },
  {
    image: Product4,
    title: 'Library Stool Chair',
    price: '$55',
  },
  {
    image: Product5,
    title: 'Library Stool Chair',
    price: '$20',
  },
  {
    image: Product6,
    title: 'Library Stool Chair',
    price: '$35',
  },
  {
    image: Product7,
    title: 'Library Stool Chair',
    price: '$45',
  },
  {
    image: Product8,
    title: 'Library Stool Chair',
    price: '$55',
  },
];

const hoverColor = '#007580';

const OurProducts = () => {
  const dispatch = useDispatch();
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const addToCart = (index) => {
    setActiveProductIndex(index);
    const product = productData[index];
    dispatch(addItemToCart(product));
  };
  
  return (
    <div className="mt-20 max-width" id='product'>
      <div className="flex mb-10 flex-column">
        <h1 className="font-semibold font-inter text-[32px] text-blue leading-[35.2px]">
          Our Products
        </h1>
        <ul className="flex gap-4 mt-4" id='product-list'>
          <li><a href="#">ALL</a></li>
          <li><a href="#">NEWEST</a></li>
          <li><a href="#">TRENDING</a></li>
          <li><a href="#">BEST SELLERS</a></li>
          <li><a href="#">FEATURED</a></li>
        </ul>
      </div>
      <div className="grid grid-cols-4 gap-10">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              activeProductIndex={activeProductIndex}
              hoverColor={hoverColor}
              onAddToCart={addToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default OurProducts;
