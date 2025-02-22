import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../pages/Loading";
import useAxiosSequre from "../hooks/useAxiosSecure";
import { useTheme } from "../hooks/ThemeProvider ";

import notFound from "../assets/not-found.png";
import { toast } from "react-toastify";


const MyVolunteerNeedPosts = () => {
  const { user } = useContext(AuthContext);
  const [mypost, setMypost] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosSequre();
  const { darkMode } = useTheme();

  useEffect(() => {
    axiosInstance
      .get(`/myPost/${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMypost(res.data);
        setLoading(false);
      })
      .catch((error) => {
       toast.warn("Data loading failed!");
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
       
        axiosInstance
          .delete(`/deletePost/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
           
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
                   toast.warn("Data deleting failed!");

          });
      }
    });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-8 md:mt-16">
          {mypost.length === 0 ? (
            <div className="text-center mt-8">
              <p className="text-lg font-bold text-gray-600">
                No volunteer need posts found.
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
              <h1
                className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
                  darkMode ? "" : ""
                }`}
              >
                My volunteer need post
              </h1>
              <table className="table  mt-8 w-full shadow-md rounded-lg overflow-hidden">
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
                          onError={(e) => (e.target.src = notFound)}
                          alt="thumbnail"
                        />
                      </td>
                      <td className="text-lg font-medium">{post.title}</td>
                      <td className="text-lg font-medium">{post.location}</td>
                      <td className=" space-y-2 md:space-y-0 md:space-x-2 ">
                        <Link to={`/updatePost/${post._id}`}>
                          <button className="inline-flex items-center md:px-4 p-[6px] md:py-2 bg-emerald-600 transition-all duration-300 ease-in-out hover:bg-emerald-700 text-white text-sm font-medium rounded-md shadow-sm hover:scale-105">
                            Update
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDelete(post._id)}
                          className="inline-flex items-center md:px-4 p-[6px] md:py-2 bg-red-600 transition-all duration-300 ease-in-out hover:bg-red-700 text-white text-sm font-medium rounded-md shadow-sm hover:scale-105"
                        >
                          Delete
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

export default MyVolunteerNeedPosts;
