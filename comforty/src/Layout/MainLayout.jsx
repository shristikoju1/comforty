import React from "react";
import { Outlet } from "react-router-dom";
import Footer from '../Components/Sections/Footer';
import Navbar from '../Components/Sections/Navbar';


const MainLayout = () => {
  return (
    <div>
      <main>
        <Navbar/>
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default MainLayout;
