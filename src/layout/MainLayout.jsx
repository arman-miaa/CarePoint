import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>

        <div className="container mx-auto min-h-[calc(100vh-390px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;