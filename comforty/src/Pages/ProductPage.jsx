import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
import { FaLocationDot } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiKeyReturnFill } from "react-icons/pi";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [mainImage, setMainImage] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setRating(data.rating);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product details");
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    function successCallback(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
    }

    function errorCallback(error) {
      console.error("Error getting location: ", error.message);
    }
  }, []);

  if (loading) return <div className="max-width">Loading product details...</div>;
  if (error) return <div className="max-width">{error}</div>;

  return (
    <div className="flex justify-between gap-10 p-4 my-12 product-page max-width">
      {product && (
        <>
          <div className="flex flex-col items-center justify-center gap-2 cursor-pointer product-image">
            <div className="main">
              {mainImage ? (
                  <img
                  src={mainImage}
                  alt={product?.title || "Product"}
                  width={500}
                  height={500}
                  className="border border-solid rounded-md border-black-300"
                /> 
              ) : (
                <img
                src={product?.thumbnail}
                alt={product?.title || "Product"}
                width={500}
                height={500}
                className="border border-solid rounded-md border-black-300"
              /> 
              )}
              
            </div>
            <div className="flex w-[60px]  cursor-pointer justify-center items-center gap-1 ">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} image ${index + 1}`}
                  width={300}
                  height={300}
                  className="border border-solid rounded-sm gallery-image border-black-300"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>

          <div className="product-details">
            <h1 className="text-2xl font-semibold">{product.title}</h1>

            <div className="my-2 rating">
              <span className="mr-2">Rating:</span>
              <Rating
                ratingValue={rating * 20}
                onClick={handleRating}
                readonly
                className="custom-rating"
              />
              <span className="ml-2">{product.rating}/5</span>
            </div>

            <p className="text-lg font-normal text-[#029FAE]">$ {product.price}</p>

            <div className="flex items-center gap-2 my-4 quantity-control">
              Quantity
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-2 border"
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-2 border"
              >
                +
              </button>
            </div>

            <p className="text-sm text-gray-700">
              Description: {product?.description || "No description available"}
            </p>

            <div className="flex gap-5 mt-5">
              <button className="px-4 py-2 text-white transition border border-blue-600 duration-300 ease-in-out rounded-lg hover:bg-blue-70 bg-[#029FAE] hover:bg-transparent hover:text-black">
                Buy Now
              </button>
              <button className="px-4 py-2 transition duration-300 ease-in-out bg-blue-300 border border-blue-600 rounded-lg hover:bg-blue-600 hover:bg-[#029fae] hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="delivery-options">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="flex items-center gap-1 text-sm font-normal text-gray-400">
                <FaLocationDot />
                  Delivery Options</h2>
                <div className="text-sm">
                  {location.latitude && location.longitude ? (
                    <p>
                      Your location is approximately Latitude: {location.latitude}, Longitude:{" "}
                      {location.longitude}
                    </p>
                  ) : (
                    <p>Fetching location...</p>
                  )}
                </div>
              </div>

              <div className="mt-2 delivery-time">
                <p className="flex items-center gap-1 text-sm font-normal text-gray-400">
                <CiDeliveryTruck />

                  Standard Delivery</p>
                <p className="text-sm ">Guaranteed by 23-24 Sep</p>
                <p className="text-sm">Cash on delivery available</p>
              </div>
            </div>

            <div className="my-4 return-warranty">
              <h2 className="flex items-center gap-1 text-sm font-normal text-gray-400">
              <PiKeyReturnFill />

                Return & Warranty</h2>
              <p className="text-sm text-gray-700">
                Details about <a href="#" className="underline">return policy </a>
                and <a href="#" className="underline">warranty</a>.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
