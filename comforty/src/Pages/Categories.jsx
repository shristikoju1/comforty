import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductCard from "../Common/ProductCard";
import { addItemToCart } from "../Store/cartSlice";
import { useParams } from "react-router-dom";

const hoverColor = "#007580";

const Categories = () => {
  const {id} = useParams();
  console.log('id:', id)
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { displayCategory } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      
      const options = {
        method: "GET",
        // url: `https://api.escuelajs.co/api/v1/products/?categoryId=${id}&limit=8`, 
        url: `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`, 
        // url: "https://api.escuelajs.co/api/v1/products/?categoryId=3",

      };

      try {
        const response = await axios.request(options);
        console.log("Response Data:", response.data);

        const categoriesWithSource = response.data.map((category) => ({
          ...category,
          apiSource: "EscuelaJS", 
        }));

        setCategories(categoriesWithSource);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchCategories();
  }, [id]);

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
      <h1 className="my-12 text-5xl font-bold text-center">{displayCategory}</h1>
      <div className="featuredProducts">
        {categories.length === 0 ? (
          <p className="text-center">No products found in this category.</p>
        ) : (
          getDisplayedProducts().map((categories, idx) => (
            <ProductCard
              key={categories.id}
              product={{
                ...categories,
                image: categories.category.image,
                title: categories.title,
                price: categories.price,
                apiSource: categories.apiSource,
              }}
              index={idx}
              hoverColor={hoverColor}
              onAddToCart={() => addToCart(currentIndex + idx)}
            />
          ))
        )}
      </div>
    </div>
  );
  };

export default Categories;
