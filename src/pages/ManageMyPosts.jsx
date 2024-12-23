import { NavLink, Outlet, useLocation } from "react-router-dom";

const ManageMyPosts = () => {
  const location = useLocation();

  

  return (
    <div>
      <div>
        {/* Navigation Links */}
        <div className="flex justify-between px-20 mt-12">
          <NavLink
            to="myVolunteerNeedPosts"
            className={({ isActive }) =>
              isActive || location.pathname === "/ManageMyPosts"
                ? "btn btn-primary"
                : "btn btn-outline"
            }
          >
            My Volunteer Need Posts
          </NavLink>
          <NavLink
            to="myVolunteerRequestPost"
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-outline"
            }
          >
            My Volunteer Request Posts
          </NavLink>
        </div>

        {/* Render Child Routes */}
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ManageMyPosts;
