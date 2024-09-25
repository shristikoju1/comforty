import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import Cart from './Pages/Cart/AddToCart'
import Favourite from "./Pages/Favorite";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import Leaflet from "./Pages/leaflet";

function App() {
  return (
    <div>

    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/fav" element={<Favourite />} />
          <Route path="/product-page/:id" element={<ProductPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/map" element={<Leaflet />} />
          
        </Route>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
