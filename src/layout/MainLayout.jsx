import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../hooks/ThemeProvider ";

const MainLayout = () => {
    const { darkMode, toggleTheme } = useTheme();
  
    return (
      <div>
        <div className={`${darkMode ? "bg-[#1a2433]" : ""}`}>
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