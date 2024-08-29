import { useState } from 'react';
import FeaturedProduct1 from '../../assets/images/feature_product1.png';
import FeaturedProduct2 from '../../assets/images/feature_product2.png';
import FeaturedProduct3 from '../../assets/images/feature_product3.png';
import FeaturedProduct4 from '../../assets/images/feature_product4.png';
import SectionHeader from '../SectionHeader';
import ProductCard from '.././ProductCard';

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
  const [activeProductIndex, setActiveProductIndex] = useState(null);

  const addToCart = (index) => {
    setActiveProductIndex(index);
  };

  return (
    <div>
      <div className="max-width">
        <SectionHeader title="Featured Products" />
        <div className="flex mt-4 space-x-6">
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
    </div>
  );
};

export default FeaturedProducts;
