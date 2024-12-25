import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import { toast } from "react-toastify";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "../hooks/ThemeProvider ";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useTheme(); 
  const [isHovered, setIsHovered] = useState(false);
   const [dropdown, setDropdown] = useState(false);

  const handleLogOut = () => {
    setIsHovered(false)
    logOutUser();
    toast.success("Logged out successfully");
  };

    const handleDropdown = () => {
      setDropdown((prev) => !prev);
    };

  useEffect(() => {
    // setIsHovered(false)
    if (darkMode) {
      document.body.classList.add("bg-gray-800");
      document.body.classList.remove("bg-base-100");
    } else {
      document.body.classList.add("bg-base-100");
      document.body.classList.remove("bg-gray-800");
    }
  }, [darkMode]);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/AllvolunteerNeedposts">All Volunteer Need Posts</NavLink>
      </li>
      <li>
        <NavLink to="/AddVolunteerNeedPostPage">
          Add Volunteer Need Posts
        </NavLink>
      </li>
    
    </>
  );

  return (
    <div
      className={`container mx-auto sticky top-0 left-0 z-50 navbar ${
        darkMode ? "bg-gray-800 text-white" : "bg-base-100"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className=" text-xl cursor-pointer font-semibold hover:font-bold ">
          <span className="text-blue-208 text-2xl">C</span>arePoint
          <span className="text-mainColor">.</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* User Profile Section */}
      {user?.email ? (
        <div className="navbar-end relative flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className=" px-2 capitalize flex justify-center items-center gap-0 md:gap-2"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6   md:h-8 md:w-8 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6   md:h-8 md:w-8" />
            )}
          </button>
          {/* User Image */}
          <img
            className="w-16 h-16 border-2 rounded-full cursor-pointer"
            src={user.photoURL}
            alt="User Profile"
            onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          />

          <div>
            <button
              onClick={handleDropdown}
              className="relative  py-2 px-4  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              My Profile
            </button>
          </div>

          {/* dropdown for my profile */}
          {dropdown && (
            <div className="fixed top-20 bg-white rounded-xl">
              <div className="  flex-col   gap-2 p-4 rounded-xl  flex justify-center items-center shadow-xl">
                <Link to="/AddVolunteerNeedPostPage">
                  <button
                    onClick={handleDropdown}
                    className="relative  py-2 px-4  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Add Volunteer need Post
                  </button>
                </Link>
                <Link to="/ManageMyPosts">
                  <button
                    onClick={handleDropdown}
                    className="relative   py-2 px-8  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Manage My Posts
                  </button>
                </Link>
                <div
                  onClick={handleDropdown}
                  className="w-full  text-right pt-2  "
                >
                  <button className="inline-flex items-center px-8 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
                    X
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dropdown Menu for hover */}
          {isHovered && (
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="absolute top-20 right-10 w-48 bg-white shadow-lg rounded-lg p-3"
            >
              <p className="text-sm md:text-xl text-center font-medium text-gray-700 mb-2">
                {user.displayName}
              </p>
              <button
                onClick={handleLogOut}
                className="relative w-full  py-2 px-4  bg-white isolation-auto z-10 border-2 border-red-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-red-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="navbar-end gap-2">
          <Link to="/login">
            <button className="relative  py-2 px-4  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Login
            </button>
          </Link>
          <Link to="/signUp">
            <button className="relative  py-2 px-4  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
