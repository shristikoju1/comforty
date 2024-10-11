import SectionHeader from "../../../Common/SectionHeader";
import ProductCard from "../../../Common/ProductCard";
import "@/styles/featuredProducts.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Store/cartSlice";
import { useEffect, useRef, useState } from "react";
import SimpleSlider from "../../../Common/Slider";
import { RotatingLines } from "react-loader-spinner";
import InternetError from "../../../Common/InternetError";

const hoverColor = "#007580";

const FeaturedProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  let sliderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/products/category/furniture"
        );
        const data = await response.json();

        // Adding apiSource to each product
        const productsWithSource = data.products.map(product => ({
          ...product,
          apiSource: "DummyJSON"
        }));
        setProductData(productsWithSource);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(
          <InternetError/>
        ); setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (index) => {
    const product = productData[index];
    dispatch(addItemToCart(product));
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    for (let i = 0; i < productData.length; i++) {
      const productIndex = (currentIndex + i) % productData.length;
      displayedProducts.push(productData[productIndex]);
    }
    console.log(productData.length);
    return displayedProducts;
  };

  if (loading) {
    return (
      <div className="items-center justify-center max-width ">
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
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div id="shop">
      <div className="max-width">
        <SectionHeader title="Featured Products" sliderRef={sliderRef} />
        <div className="featuredProducts">
          <SimpleSlider sliderRef={sliderRef}>
            {getDisplayedProducts().map((product, index) => (
              <ProductCard
              key={product.id}
              product={{
                ...product,
                image: product.thumbnail, // thumbnail as image source
                title: product.title,
                price: product.price,
                // source: product.brand || "Unknown source", // Adding a source property, example using 'brand'
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
