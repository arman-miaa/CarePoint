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
      {/* <li>
        <NavLink>My Profile</NavLink>
      </li> */}
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
        <a className=" text-xl cursor-pointer">
          <span className="text-blue-208 text-2xl">C</span>arePoint
          <span className="text-red-800">.</span>
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
            <Link>
              <button
                onClick={handleDropdown}
                className="border-2 p-2 rounded-lg border-blue-400"
              >
                My Profile
              </button>
            </Link>
          </div>

          {/* dropdown for my profile */}
          {dropdown && (
            <div className="fixed top-20 bg-white rounded-xl p-8">
              <div className="  flex-col   gap-2   flex justify-center items-center shadow-xl">
                <Link to="/AllvolunteerNeedposts">
                  <button onClick={handleDropdown} className="btn btn-primary">
                    Add Volunteer need Post
                  </button>
                </Link>
                <Link to="/ManageMyPosts">
                  <button onClick={handleDropdown} className="btn btn-primary">
                    Manage My Posts{" "}
                  </button>
                </Link>
              </div>
              <div
                onClick={handleDropdown}
                className="w-full  text-right -mb-4 mt-4"
              >
                <button className="btn border-2">X</button>
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
              <p className="text-sm font-medium text-gray-700 mb-2">
                {user.displayName}
              </p>
              <button onClick={handleLogOut} className="btn btn-primary w-full">
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="navbar-end gap-2">
          <Link to="/login">
            <button className="btn">LogIn</button>
          </Link>
          <Link to="/signUp">
            <button className="btn">Register</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
