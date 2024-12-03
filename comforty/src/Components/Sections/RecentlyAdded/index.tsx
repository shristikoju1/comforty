import { useRef, useState, useEffect } from "react";
import SectionHeader from "../../../Common/SectionHeader";
import ProductCard from "../../../Common/ProductCard";
import '@/styles/recent.scss';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Store/cartSlice";
import SimpleSlider from "../../../Common/Slider";
import InternetError from "../../../Common/InternetError";
import { toast } from "react-toastify";
import Loader from "@/Common/Loader";

const hoverColor = "#007580";

const RecentlyAdded = () => {
  const [productData, setProductData] = useState([]);
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productsPerPage = 4;
  
  const dispatch = useDispatch();
  let sliderRef = useRef(null);

  // Fetch product data from the DummyJSON furniture category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products/category/furniture");
        const data = await response.json();
        setProductData(data.products); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(
          <InternetError/>
        );
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (index) => {
    setActiveProductIndex(index);
    const product = productData[index];
    console.log("Adding to cart:", product); 
    dispatch(addItemToCart(product));
    toast.success(`Added to cart!`);
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    for (let i = 0; i < productsPerPage; i++) {
      let currentIndex = 0;
      const productIndex = (currentIndex + i) % productData.length;
      displayedProducts.push(productData[productIndex]);
    }
    return displayedProducts;
  };

  if (loading) {
    return <Loader/> ;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="max-width mb-[100px]">
        <SectionHeader title="Recently Added" sliderRef={sliderRef} />
        <div className="recent">
          <SimpleSlider sliderRef={sliderRef} showSlides={4}>
            {getDisplayedProducts().map((product, index) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  image: product.thumbnail, 
                  title: product.title,
                  price: `${product.price}`, 
                }}
                index={index}
                activeProductIndex={activeProductIndex}
                hoverColor={hoverColor}
                onAddToCart={() => addToCart(index)}
              />
            ))}
          </SimpleSlider>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
