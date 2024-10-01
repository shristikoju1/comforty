import { Outlet } from "react-router-dom";
import Footer from '../Components/Sections/Footer';
import Navbar from '../Components/Sections/Navbar';
import { ToastContainer, Bounce } from 'react-toastify';

const MainLayout = () => {
  return (
    <div>
        <ToastContainer
        position='bottom-right'
        theme="colored"
        transition={Bounce}
      />
      <main>
        <Navbar />
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default MainLayout;
