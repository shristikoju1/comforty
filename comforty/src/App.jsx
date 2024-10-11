import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import Cart from "./Pages/Cart/AddToCart";
import Favourite from "./Pages/Favorite";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import Leaflet from "./Pages/leaflet";
import NotFound from "./Pages/NotFound";
import Categories from "./Pages/Categories";
import SearchPage from "./Pages/SearchPage";
// import ProfileSidebar from './Components/ProfileSidebar';
// import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div>
      <Router>
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
            <Route path="/categories/:id" element={<Categories/>}/>
            {/* <Route path="/profile" element={<ProfileSidebar/>}/> */}
            <Route path = "search/:searchKey" element = {<SearchPage />} />

            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
