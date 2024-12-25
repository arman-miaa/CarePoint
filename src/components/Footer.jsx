// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/ThemeProvider ";

const Footer = () => {
      const { darkMode, toggleTheme } = useTheme();
  
  return (
    <div
      className={`mt-8 md:mt-16 lg:mt-20  shadow-xl ${
        darkMode ? "bg-[#1a2433]  shadow-xl " : "bg-base-200"
      }`}
    >
      <footer className="footer container mx-auto text-base-content p-10">
        <nav className={`${darkMode ? "text-gray-400" : ""}  mx-auto md:mx-0`}>
          <h6 className="footer-title text-xl text-emerald-700 font-bold">
            Services
          </h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav className={`${darkMode ? "text-gray-400" : ""} mx-auto md:mx-0`}>
          <h6 className="footer-title text-xl text-emerald-700 font-bold">
            Company
          </h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press Kit</a>
        </nav>

        {/* Volunteers Section */}
        <nav className={`${darkMode ? "text-gray-400" : ""} mx-auto md:mx-0`}>
          <h6 className="footer-title text-xl text-emerald-700 font-bold">
            Volunteers
          </h6>
          <Link to="/volunteers" className="link link-hover">
            Join Our Team
          </Link>
          <Link to="/volunteers/opportunities" className="link link-hover">
            Volunteer Opportunities
          </Link>
          <Link to="/volunteers/faq" className="link link-hover">
            FAQs
          </Link>
          <Link to="/volunteers/testimonials" className="link link-hover">
            Volunteer Stories
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
