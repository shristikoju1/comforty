import Product1 from '../../assets/images/our_product1.png';
import Product2 from '../../assets/images/our_product2.png';
import Product3 from '../../assets/images/our_product3.png';
import Product4 from '../../assets/images/our_product4.png';
import Product5 from '../../assets/images/our_product5.png';
import Product6 from '../../assets/images/our_product6.png';
import Product7 from '../../assets/images/our_product7.png';
import Product8 from '../../assets/images/our_product8.png';
import ProductCard from '../ProductCard';
import { useState } from 'react';

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

    const [activeProductIndex, setActiveProductIndex] = useState(null);
  
    const addToCart = (index) => {
      setActiveProductIndex(index);
    };
  
  return (
    <div className="mt-12 max-width">
      <div className="flex flex-column mb-4">
        <h1 className="font-semibold font-inter text-[32px] text-[#272343] leading-[35.2px]">
          Our Products
        </h1>
        <ul className="flex gap-4 mb-4">
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
