import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import Cart from './Pages/Cart/AddToCart'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
