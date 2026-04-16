import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/Layout/MainLayout";
import Loader from "@/Common/Loader";

// Lazy load all page components for route-based code splitting
const HomePage = lazy(() => import("@/Pages/HomePage"));
const SignupPage = lazy(() => import("@/Pages/SignupPage"));
const Cart = lazy(() => import("@/Pages/AddToCart"));
const Favourite = lazy(() => import("@/Pages/Favorite"));
const ProductPage = lazy(() => import("@/Pages/ProductPage"));
const LoginPage = lazy(() => import("@/Pages/LoginPage"));
const Leaflet = lazy(() => import("@/Pages/Leaflet"));
const NotFound = lazy(() => import("@/Pages/NotFound"));
const Categories = lazy(() => import("@/Pages/Categories"));
const SearchPage = lazy(() => import("@/Pages/SearchPage"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/fav" element={<Favourite />} />
              <Route path="/product-page/:id" element={<ProductPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/map" element={<Leaflet />} />
              <Route path="/categories/:id" element={<Categories />} />
              <Route path="search/:searchKey" element={<SearchPage />} />

              <Route path="*" element={<NotFound />} />

            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
