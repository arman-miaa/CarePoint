import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);
  const [dropdown, setDropdown] = useState(false);
  // console.log(user);

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
    // console.log("hi");
  };
  const handleLogOut = () => {
    logOutUser();
    toast.success("Logged out successfully");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/AllvolunteerNeedposts">All volunteer Need posts</NavLink>
      </li>
      <li>
        <NavLink to="/AddVolunteerNeedPostPage">
          Add volunteer Need posts
        </NavLink>
      </li>

      <li>
        <NavLink onClick={handleDropdown}>My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto sticky top-0 left-0 z-50 navbar bg-base-100">
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
        <a className="btn btn-ghost text-xl">CarePoint</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {dropdown && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <Link to="/AllvolunteerNeedposts">
            <button onClick={handleDropdown} className="btn btn-primary">
              Add Volunteer need Post
            </button>
          </Link>
          <Link to="/ManageMyPosts">
            <button onClick={handleDropdown} className="btn btn-primary">Manage My Posts </button>
          </Link>
        </div>
      )}

      {user?.email ? (
        <div className="navbar-end">
          <img
            className="w-16 h-16 rounded-full cursor-pointer"
            src={user.photoURL}
            alt=""
          />
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
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
