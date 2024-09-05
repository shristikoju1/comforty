import { useState } from "react";
import FeaturedProduct1 from "../../../assets/images/feature_product1.png";
import FeaturedProduct2 from "../../../assets/images/feature_product2.png";
import FeaturedProduct3 from "../../../assets/images/feature_product3.png";
import FeaturedProduct4 from "../../../assets/images/feature_product4.png";
import SectionHeader from "../../Common/SectionHeader";
import ProductCard from "../../Common/ProductCard";
import './recent.scss';

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Store/cartSlice";

const productData = [
  {
    id: 13,
    image: FeaturedProduct1,
    title: "Library Stool Chair",
    price: "$20",
  },
  {
    id: 14,
    image: FeaturedProduct2,
    title: "Modern Armchair",
    price: "$35",
  },
  {
    id: 15,
    image: FeaturedProduct3,
    title: "Wooden Dining Table",
    price: "$45",
  },
  {
    id: 16,
    image: FeaturedProduct4,
    title: "Vintage Sofa",
    price: "$55",
  },
];

const hoverColor = "#007580";

const RecentlyAdded = () => {
  const dispatch = useDispatch();
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const addToCart = (index) => {
    setActiveProductIndex(index);
    const product = productData[index];
    console.log("Adding to cart:", product); 
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <div className="max-width mb-[100px]">
        <SectionHeader title="Recently Added" />
        <div className="recent">
          {productData.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              activeProductIndex={activeProductIndex}
              hoverColor={hoverColor}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;