import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHourglassEnd } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";
import ProductCard from "../Components/Common/ProductCard";

const SearchPage = () => {
  const { searchKey } = useParams(); 
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const getSearchProducts = async () => {
      setSearchLoading(true); // Start loading
      
      try {
        // Fetch all products from the API
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        
        // Check if the products field exists and is an array
        if (Array.isArray(data.products)) {
          // Filter products based on the searchKey
          const filteredResults = data.products.filter((product) =>
            product.title?.toLowerCase().includes(searchKey.toLowerCase()) || 
            product.description?.toLowerCase().includes(searchKey.toLowerCase()) ||
            product.brand?.toLowerCase().includes(searchKey.toLowerCase()) ||
            product.category?.toLowerCase().includes(searchKey.toLowerCase())
          );

          setSearchResult(filteredResults); // Set filtered results
        } else {
          console.error("Unexpected data format:", data);
          setSearchResult([]); // Set empty result if the format is not as expected
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResult([]); // Set empty result on error
      } finally {
        setSearchLoading(false); // End loading
      }
    };

    if (searchKey) {
      getSearchProducts(); // Fetch when searchKey changes
    }
  }, [searchKey]);

  return (
    <main className="bg-secondary max-width">
      <div className="container">
        <div className="py-5 sc-wrapper">
          <div className="sc-title text-center">
          <h3>Your search results</h3>

          </div>
          <br />
          <br />
          {searchLoading ? (
            <div className="items-center justify-center max-width">
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="#029FAE"
                strokeWidth="5"
                animationDuration="2"
                ariaLabel="rotating-lines-loading"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {searchResult.length > 0 ? (
                searchResult.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      ...product,
                      image: product.thumbnail, // Using thumbnail as image source
                      title: product.title,
                      price: product.price,
                    }}
                  />
                ))
              ) : (
                <div className="flex justify-center text-center items-center ">
                  <FaHourglassEnd />
                  <span className="px-2 text-center">No products found!</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
