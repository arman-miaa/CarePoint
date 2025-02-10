// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/ThemeProvider ";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
      const { darkMode } = useTheme();
  
  return (
    <div
      className={`mt-8 md:mt-16 lg:mt-20  shadow-xl ${
        darkMode ? "bg-[#1a2433]  shadow-xl " : "bg-base-200"
      }`}
    >
      <footer className="footer footer-center   p-10">
        <aside>
          <img src="/fav-icon.png" alt="" className="w-20 h-20 rounded-full" />
          <p
            className={`footer-title  ${
              darkMode ? "text-emerald-400" : "text-black "
            } font-bold`}
          >
            CarePoint - Empowering Volunteers
          </p>
          <nav
            className={`${darkMode ? "text-gray-400" : ""}  mx-auto md:mx-0`}
          >
            <ul className="flex gap-2 font-semibold">
              <li className="hover:underline hover:text-emerald-700">
                <a href="/#banner">Home</a>
              </li>
              <li className="hover:underline hover:text-emerald-700">
                <Link to="/AllvolunteerNeedposts">All Posts</Link>
              </li>
              <li className="hover:underline hover:text-emerald-700">
                <Link to='/ourBlogs'>Our Blogs</Link>
              </li>
              <li className="hover:underline hover:text-emerald-700">
                <Link to="/signUp">Regisger</Link>
              </li>
            </ul>
          </nav>
          <p className={`${darkMode ? "text-gray-400" : ""}`}>
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/arman2mia"
              target="_blank"
              className="text-blue-600 text-3xl"
            >
              <FaFacebook></FaFacebook>{" "}
            </a>
            <a
              href="https://x.com/arman_miaa"
              target="_blank"
              className="text-gray-600 text-3xl"
            >
              <FaTwitter></FaTwitter>{" "}
            </a>
            <a
              href="https://www.instagram.com/arman_mia36/"
              target="_blank"
              className="text-pink-800 text-3xl"
            >
              <FaInstagram></FaInstagram>{" "}
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;


