import '../styles/SearchPage.scss'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHourglassEnd } from "react-icons/fa";
import ProductCard from "../Components/Common/ProductCard";
import FilterView from "../Components/FilterView";
import * as constants from '../constants/constants';
import Loader from "../Components/Common/Loader";

const SearchPage = () => {
  const { searchKey } = useParams();
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [sortOption, setSortOption] = useState(constants.BEST_MATCH); // Default to Best Match
  const [view, setView] = useState('grid');

  useEffect(() => {
    const getSearchProducts = async () => {
      setSearchLoading(true);

      try {
        // Fetch all products
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        if (Array.isArray(data.products)) {
          // Filter products based on the searchKey
          const filteredResults = data.products.filter((product) =>
            product.title?.toLowerCase().includes(searchKey.toLowerCase()) ||
            product.description?.toLowerCase().includes(searchKey.toLowerCase()) ||
            product.brand?.toLowerCase().includes(searchKey.toLowerCase()) ||
            product.category?.toLowerCase().includes(searchKey.toLowerCase())
          );

          // Sort the filtered results based on the sortOption
          const sortedResults = [...filteredResults];
          if (sortOption === constants.LOW_TO_HIGH) {
            sortedResults.sort((a, b) => a.price - b.price);
          } else if (sortOption === constants.HIGH_TO_LOW) {
            sortedResults.sort((a, b) => b.price - a.price);
          }
          // For Best Match, no sorting is needed, the default fetched order will be used

          setSearchResult(sortedResults);
        } else {
          console.error("Unexpected data format:", data);
          setSearchResult([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResult([]);
      } finally {
        setSearchLoading(false);
      }
    };

    if (searchKey) {
      getSearchProducts();
    }
  }, [searchKey, sortOption]); // Re-run when sortOption changes

  return (
    <main className="bg-secondary max-width">
      <div className="container">
        <div className="py-5 sc-wrapper">
          <div className="sc-title text-center">
            <h3>Your search results</h3>
          </div>
          <br />
          {searchLoading ? (
            <Loader />
          ) : (
            <div>
              <FilterView setSortOption={setSortOption} setView={setView} />
              <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4' : 'list'}>
                {searchResult.length > 0 ? (
                  searchResult.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={{
                        ...product,
                        image: product.thumbnail,
                        title: product.title,
                        price: product.price,
                      }}
                      // Pass additional props if needed for styling in list view
                    />
                  ))
                ) : (
                  <div className="flex justify-center text-center items-center ">
                    <FaHourglassEnd />
                    <span className="px-2 text-center">No products found!</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
