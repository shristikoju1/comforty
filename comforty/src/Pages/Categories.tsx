import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductCard from "../Common/ProductCard";
import { addItemToCart } from "../Store/cartSlice";
import { useParams, useLocation } from "react-router-dom";
import Title from "@/Common/Title";
import { toast } from "react-toastify";

const hoverColor = "#007580";

const Categories = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  // Function to extract the category name from the URL query parameters
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const categoryName = query.get("name") || "Category";

  useEffect(() => {
    const fetchCategories = async () => {
      const options = {
        method: "GET",
        url: `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`,
      };

      try {
        const response = await axios.request(options);
        const categoriesWithSource = response.data.map((category) => ({
          ...category,
          apiSource: "EscuelaJS",
        }));
        setCategories(categoriesWithSource);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [id]);

  const addToCart = (idx) => {
    const selectedProduct = categories[idx];
    dispatch(addItemToCart(selectedProduct));
    toast.success(`Added to cart!`);
  };

  const getDisplayedProducts = () => {
    const displayedProducts = [];
    let currentIndex = 0;
    if (categories.length > 0) {
      for (let i = 0; i < categories.length; i++) {
        const categoriesIndex = (currentIndex + i) % categories.length;
        displayedProducts.push(categories[categoriesIndex]);
      }
    }
    return displayedProducts;
  };

  return (
    <div className="mt-10 max-width">
      <Title title={categoryName}/>
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
              onAddToCart={() => addToCart(idx + 1)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
