import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductCard from "../Components/Common/ProductCard";
import { addItemToCart } from "../Store/cartSlice";
import SectionHeader from "../Components/Common/SectionHeader";

const hoverColor = "#007580";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  let sliderRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const options = {
        method: "GET",
        url: "https://api.escuelajs.co/api/v1/products/?categoryId=3", // Fetching products for category 3
      };

      try {
        const response = await axios.request(options);
        console.log("Response Data", response.data);

        // Add apiSource to each category item
        const categoriesWithSource = response.data.map((category) => ({
          ...category,
          apiSource: "EscuelaJS", // Add the source to each product
        }));

        setCategories(categoriesWithSource);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchCategories();
  }, []);

  const addToCart = (idx) => {
    const selectedProduct = categories[idx];
    dispatch(addItemToCart(selectedProduct));
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    if (categories.length > 0) {
      for (let i = 0; i < categories.length; i++) {
        const categoriesIndex = (currentIndex + i) % categories.length;
        displayedProducts.push(categories[categoriesIndex]);
      }
    }
    return displayedProducts;
  };

  return (
    <div className="max-width">
      <SectionHeader title="Categories" sliderRef={sliderRef} />
      <div className="featuredProducts">
        {getDisplayedProducts().map((categories, idx) => (
          <ProductCard
            key={categories.id}
            product={{
              ...categories,
              image: categories.category.image, // using category image as source
              title: categories.title,
              price: categories.price,
              apiSource: categories.apiSource, // Pass the apiSource property
            }}
            index={idx}
            hoverColor={hoverColor}
            onAddToCart={() => addToCart(currentIndex + idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
