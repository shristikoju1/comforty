import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import SectionHeader from "@/Common/SectionHeader";
import ProductCard from "@/Common/ProductCard";
import SimpleSlider from "@/Common/Slider";
import InternetError from "@/Common/InternetError";
import Loader from "@/Common/Loader";

import { addItemToCart } from "@/Store/cartSlice";

import "@/styles/featuredProducts.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  apiSource: string;
  [key: string]: any; // To accommodate any additional properties from the API
}

const hoverColor = "#007580";

const FeaturedProducts: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<JSX.Element | null>(null);
  const dispatch = useDispatch();
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/products/category/furniture"
        );
        const data = await response.json();

        // Adding apiSource to each product
        const productsWithSource = data.products.map((product: any) => ({
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

  const addToCart = (index: number) => {
    const product = productData[index];
    dispatch(addItemToCart(product));
    toast.success(`Added to cart!`);
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    for (let i = 0; i < productData.length; i++) {
      let currentIndex = 0;
      const productIndex = (currentIndex + i) % productData.length;
      displayedProducts.push(productData[productIndex]);
    }
    console.log(productData.length);
    return displayedProducts;
  };

  if (loading) {
    return (
      <Loader/>
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
                image: product.thumbnail, 
                title: product.title,
                price: product.price,
              }}
              index={index}
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

export default FeaturedProducts;
