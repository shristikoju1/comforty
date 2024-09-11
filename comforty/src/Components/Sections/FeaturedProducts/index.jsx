import FeaturedProduct1 from "../../../assets/images/feature_product1.png";
import FeaturedProduct2 from "../../../assets/images/feature_product2.png";
import FeaturedProduct3 from "../../../assets/images/feature_product3.png";
import FeaturedProduct4 from "../../../assets/images/feature_product4.png";
import SectionHeader from "../../Common/SectionHeader";
import ProductCard from "../../Common/ProductCard";
import './featuredProducts.scss'

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../Store/cartSlice'; 
import { useState } from "react";


const productData = [
  {
    id: 1,
    image: FeaturedProduct1,
    title: "Library Stool Chair",
    price: "$20",
  },
  {
    id: 2,
    image: FeaturedProduct2,
    title: "Modern Armchair",
    price: "$35",
  },
  {
    id: 3,
    image: FeaturedProduct3,
    title: "Wooden Dining Table",
    price: "$45",
  },
  {
    id: 4,
    image: FeaturedProduct4,
    title: "Vintage Sofa",
    price: "$55",
  },
];

const hoverColor = "#007580";

const FeaturedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;

  const dispatch = useDispatch();
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const addToCart = (index) => {
    setActiveProductIndex(index);
    const product = productData[index];
    console.log('Adding to cart:', product); 
    dispatch(addItemToCart(product));
  };

  const handleForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productData.length - 1 : prevIndex - 1
    );
  };

  const handleBackward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    for (let i = 0; i < productsPerPage; i++) {
      const productIndex = (currentIndex + i) % productData.length;
      displayedProducts.push(productData[productIndex]);
    }
    return displayedProducts;
  };

  return (
    <div id="shop">
      <div className="max-width">
        <SectionHeader
          title="Featured Products"
          showSliders={true}
          backward={handleBackward}
          forward={handleForward}
        />
        <div className="featuredProducts">
          {getDisplayedProducts().map((product, index) => (
            <ProductCard
              key={product.id}
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