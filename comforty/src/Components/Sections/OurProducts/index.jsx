import Product1 from '@/assets/images/our_product1.png';
import Product2 from '@/assets/images/our_product2.png';
import Product3 from '@/assets/images/our_product3.png';
import Product4 from '@/assets/images/our_product4.png';
import Product5 from '@/assets/images/our_product5.png';
import Product6 from '@/assets/images/our_product6.png';
import Product7 from '@/assets/images/our_product7.png';
import Product8 from '@/assets/images/our_product8.png';
import ProductCard from '@/Common/ProductCard';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/Store/cartSlice'; 
import '@/styles/ourproduct.scss';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const productData = [
  {
    id: 101,
    image: Product1,
    title: 'Library Stool Chair',
    price: 20,
  },
  {
    id: 102,
    image: Product2,
    title: 'Library Stool Chair',
    price: 35,
  },
  {
    id: 103,
    image: Product3,
    title: 'Library Stool Chair',
    price: 45,
  },
  {
    id: 104,
    image: Product4,
    title: 'Library Stool Chair',
    price: 55,
  },
  {
    id: 105,
    image: Product5,
    title: 'Library Stool Chair',
    price: 20,
  },
  {
    id: 106,
    image: Product6,
    title: 'Library Stool Chair',
    price: 35,
  },
  {
    id: 107,
    image: Product7,
    title: 'Library Stool Chair',
    price: 45,
  },
  {
    id: 108,
    image: Product8,
    title: 'Library Stool Chair',
    price: 55,
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
    toast.success('Added to cart!')
  };
  
  return (
    <div className="mt-20 max-width" id="product">
      <div className="flex mb-10 flex-column">
        <h1 className="font-semibold font-inter text-[32px] text-blue leading-[35.2px]">
          Our Products
        </h1>
        <ul className="flex gap-4 mt-4" id="product-list">
          <li><Link to="all">ALL</Link></li>
          <li><Link to="new">NEWEST</Link></li>
          <li><Link to="trend">TRENDING</Link></li>
          <li><Link to="best-sell">BEST SELLERS</Link></li>
          <li><Link to="featured">FEATURED</Link></li>
        </ul>
      </div>
      <div className="ourProducts">
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
