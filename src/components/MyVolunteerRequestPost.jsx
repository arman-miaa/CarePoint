import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../pages/Loading";
import useAxiosSequre from "../hooks/useAxiosSecure";
import { useTheme } from "../hooks/ThemeProvider ";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
import notFound from "../assets/not-found.png";

const MyVolunteerRequestPost = () => {
  const { user } = useContext(AuthContext);
  const [mypost, setMypost] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosSequre();
  const { darkMode } = useTheme();


  // console.log(mypost);
  useEffect(() => {
    axiosInstance
      .get(`/myRequestPost/${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMypost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("clicked delete", id);
        axiosInstance
          .delete(`/deleteRequest/${id}`, {
           
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setMypost((prevPosts) =>
                prevPosts.filter((post) => post._id !== id)
              );
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="mt-12 md:mt-16">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {mypost.length === 0 ? (
            <div className="text-center mt-8">
              <p className="text-lg font-bold text-gray-600">
                No volunteer Requested need posts found.
              </p>
            </div>
          ) : (
            <div
              className={`overflow-x-auto  rounded-xl ${
                darkMode
                  ? "border-2 border-emerald-700"
                  : "bg-base-200 border-2"
              }`}
            >
              <h3
                className={` text-2xl mt-4 pb-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
                  darkMode ? "" : ""
                }`}
              >
                My Volunteer Request Post
              </h3>
              <table className="table mt-8 w-full shadow-md rounded-lg overflow-hidden">
                {/* head */}
                <thead>
                  <tr
                    className={`text-emerald-700 font-bold text-lg md:text-xl ${
                      darkMode
                        ? "bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900"
                        : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
                    }`}
                  >
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mypost.map((post, index) => (
                    <tr
                      key={post._id}
                      className={`${
                        index % 2 === 0
                          ? darkMode
                            ? "bg-custom-gray"
                            : "bg-white"
                          : darkMode
                          ? "bg-gray-800"
                          : "bg-gray-100"
                      } transition-all duration-300 ${
                        darkMode
                          ? "text-gray-400 cursor-pointer"
                          : "hover:bg-gray-200 cursor-pointer"
                      } hover:scale-105`}
                    >
                      <th className="text-emerald-700 font-bold">
                        {index + 1}
                      </th>
                      <td>
                        <img
                          className="w-12 h-12 rounded-full object-cover shadow-sm"
                          src={post.thumbnail || notFound}
                          alt="thumbnail"
                          onError={(e) => (e.target.src = notFound)}
                        />
                      </td>
                      <td className="text-lg font-medium">{post.title}</td>
                      <td className="text-lg font-medium">{post.location}</td>
                      <td className="flex gap-2 flex-col md:flex-row items-center justify-center">
                        <button
                          onClick={() => handleDelete(post._id)}
                          className="inline-flex items-center px-8 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                        >
                          Censel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyVolunteerRequestPost;
