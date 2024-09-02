import React, { useState } from 'react';
import FeaturedProduct1 from '../../../assets/images/feature_product1.png';
import FeaturedProduct2 from '../../../assets/images/feature_product2.png';
import FeaturedProduct3 from '../../../assets/images/feature_product3.png';
import FeaturedProduct4 from '../../../assets/images/feature_product4.png';
import SectionHeader from '../../Common/SectionHeader';
import ProductCard from '../../Common/ProductCard';
import CarouselLogic from '../../Common/CarouselLogic'

const productData = [
  {
    image: FeaturedProduct1,
    title: 'Library Stool Chair',
    price: '$20',
  },
  {
    image: FeaturedProduct2,
    title: 'Modern Armchair',
    price: '$35',
  },
  {
    image: FeaturedProduct3,
    title: 'Wooden Dining Table',
    price: '$45',
  },
  {
    image: FeaturedProduct4,
    title: 'Vintage Sofa',
    price: '$55',
  },
];

const hoverColor = '#007580';

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;

  const handleForward = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? productData.length - 1 : prevIndex - 1
    );
  };

  const handleBackward = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % productData.length
    );
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    for (let i = 0; i < productsPerPage; i++) {
      const productIndex = (currentIndex + i) % productData.length;
      displayedProducts.push(productData[productIndex]);
    }
    return displayedProducts;
  };

  const addToCart = (index) => {
    
  };

  // console.log(CarouselLogic)

  return (
    <div id='shop'>
      <div className="max-width">
        <SectionHeader 
          title="Featured Products" 
          showSliders={true}
          backward={handleBackward}
          forward={handleForward}
        />
        <div className="flex mt-4 gap-6 overflow-hidden">
          {getDisplayedProducts().map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              activeProductIndex={currentIndex}
              hoverColor={hoverColor}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
