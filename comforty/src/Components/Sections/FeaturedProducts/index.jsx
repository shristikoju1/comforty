import SectionHeader from "../../Common/SectionHeader";
import ProductCard from "../../Common/ProductCard";
import './featuredProducts.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../Store/cartSlice'; 
import { useEffect, useRef, useState } from "react";
import SimpleSlider from "../../Common/Slider";
import { RotatingLines } from "react-loader-spinner";

const hoverColor = "#007580";

const FeaturedProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const productsPerPage = 4;
  const dispatch = useDispatch();
  let sliderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products/category/furniture")
        const data = await response.json();
        setProductData(data.products);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, [])

  const addToCart = (index) => {
    const product = productData[index];
    dispatch(addItemToCart(product));
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    for (let i = 0; i < productsPerPage; i++) {
      const productIndex = (currentIndex + i) % productData.length;
      displayedProducts.push(productData[productIndex]);
    }
    return displayedProducts;
  };

  if (loading) {
    return <div className="items-center justify-center max-width ">
         <RotatingLines
  visible={true}
  height="96"
  width="96"
  color="#029FAE"
  strokeWidth="5"
  animationDuration="2"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="shop">
      <div className="max-width">
        <SectionHeader 
          title="Featured Products"
          sliderRef={sliderRef}
        />
        <div className="featuredProducts">
          <SimpleSlider sliderRef={sliderRef} >
            {getDisplayedProducts().map((product, index) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  image: product.thumbnail, 
                  title: product.title,
                  price: product.price, 
                }}  
                index={index}
                hoverColor={hoverColor}
                onAddToCart={() => addToCart(currentIndex + index)}
              />
            ))}
          </SimpleSlider>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
