import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "./Loading";
import { Helmet } from "react-helmet";
import axios from "axios";
import { FaTh, FaTable } from "react-icons/fa";
import { useTheme } from "../hooks/ThemeProvider ";
import notFound from '../assets/not-found.png'

const AllvolunteerNeedposts = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
  const initialPosts = useLoaderData();
  const [volunteerPosts, setVolunteerPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("card");
  const { darkMode } = useTheme();

  useEffect(() => {
    if (volunteerPosts) {
      setLoader(false);
    }
  }, [volunteerPosts]);

  useEffect(() => {
    axios
      .get(
        `https://ph-assignment-11-server-brown.vercel.app/allPost?search=${search}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setVolunteerPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [search]);

  return (
    <section className="">
      {loader ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4 py-12">
          <Helmet>
            <title>All Volunteer Need Posts Page || CarePoint</title>
          </Helmet>

          {/* Search Bar */}
          <div className="text-center mb-8">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by title"
              className="input input-bordered w-full max-w-md mx-auto rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            />
          </div>

          {/* Change Layout Icons */}
          <div className="text-center mb-4">
            {/* Grid Icon for Card Layout */}
            <button
              onClick={() => setLayout("card")}
              className={`btn border-none mr-2 ${
                layout === "card" ? "bg-emerald-700" : "bg-gray-300 hover:bg-emerald-700"
              }`}
            >
              <FaTh size={24} />
            </button>

            {/* Table Icon for Table Layout */}
            <button
              onClick={() => setLayout("table")}
              className={`btn border-none mr-2 ${
                layout === "table" ? "bg-emerald-700" : "bg-gray-300 hover:bg-emerald-700"
              }`}
            >
              <FaTable size={24} />
            </button>
          </div>

          {/* Conditional Rendering for No Data */}
          {volunteerPosts.length === 0 ? (
            <div className="text-center mt-8">
              <h2 className="text-xl font-semibold text-gray-700">
                No volunteer posts found. Please try a different search term or
                check back later.
              </h2>
            </div>
          ) : layout === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerPosts.map((volunteerPost) => (
                <div key={volunteerPost._id}>
                  <div className="card h-full card-compact bg-white shadow-lg rounded-lg overflow-hidden">
                    <figure>
                      <img
                        src={volunteerPost.thumbnail || notFound}
                        alt="Image Not Found"
                        onError={(e) => (e.target.src = notFound)}
                        className="w-full h-[210px] object-cover"
                      />
                    </figure>
                    <div className="card-body p-4">
                      <h2 className="card-title text-emerald-700 font-bold md:text-2xl">
                        {volunteerPost.title}
                      </h2>
                      <p className="font-semibold md:text-lg">
                        <span className="font-semibold md:text-xl">
                          Category:
                        </span>{" "}
                        {volunteerPost.category}
                      </p>
                      <p className="font-semibold md:text-lg text-emerald-700">
                        <span className="font-semibold md:text-xl text-black">
                          Volunteer Need:
                        </span>{" "}
                        <span
                          className={`${
                            volunteerPost.volunteers <= 0
                              ? "text-red-400"
                              : "text-emerald-700"
                          }`}
                        >
                          {volunteerPost.volunteers <= 0 ? (
                            <>(No volunteers needed)</>
                          ) : (
                            volunteerPost.volunteers
                          )}
                        </span>
                      </p>

                      <p className="font-semibold md:text-lg">
                        <span className="font-semibold md:text-xl">
                          Deadline:{" "}
                        </span>
                        {new Date(
                          volunteerPost.postDeadline
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </p>
                      <div className="mt-auto">
                        <Link to={`/detailsPage/${volunteerPost._id}`}>
                          <button
                            type="submit"
                            className="flex justify-center gap-2 items-center w-full shadow-xl text-lg border-emerald-500 backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-800 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                          >
                            View Details
                            <svg
                              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                              viewBox="0 0 16 19"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                className="fill-gray-800 group-hover:fill-gray-800"
                              ></path>
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full mt-8 shadow-md rounded-lg overflow-hidden table-fixed">
                <thead>
                  <tr
                    className={`text-emerald-700 font-bold text-lg md:text-xl ${
                      darkMode
                        ? "bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900"
                        : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
                    }`}
                  >
                    <th className="px-4 py-2 text-left hidden md:flex">#</th>
                    <th className="px-4 py-2 text-left">Image</th>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left flex gap-2 flex-col justify-center ">
                      <span>Volunteer</span>{" "}
                      <span className="hidden md:flex ml-4 -mt-2">Need</span>
                    </th>

                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerPosts.map((volunteerPost, index) => (
                    <tr
                      key={volunteerPost._id}
                      className="transition-all text-black font-bold dark:text-gray-400 duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 cursor-pointer"
                    >
                      <th className="text-emerald-700 font-bold hidden md:flex">
                        {index + 1}
                      </th>
                      <td>
                        <img
                          className="w-12 h-12 rounded-full object-cover shadow-sm"
                          src={volunteerPost.thumbnail || notFound}
                          alt="thumbnail"
                          onError={(e) => (e.target.src = notFound)}
                        />
                      </td>
                      <td className=" shadow-sm">{volunteerPost.title}</td>
                      <td
                        className={`px-4 py-2 ${
                          volunteerPost.volunteers <= 0
                            ? "text-red-500 font-semibold"
                            : ""
                        }`}
                      >
                        {volunteerPost.volunteers <= 0
                          ? ` (No volunteers needed)`
                          : volunteerPost.volunteers}
                      </td>

                      {/* <td className="px-4 py-2">
                        {new Date(
                          volunteerPost.postDeadline
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </td> */}
                      <td className="px-4 py-2">
                        <Link to={`/detailsPage/${volunteerPost._id}`}>
                          <button className="inline-flex items-center px-4 py-2 bg-emerald-600 transition-all duration-300 ease-in-out hover:bg-emerald-700 text-white text-sm font-medium rounded-md shadow-sm hover:scale-105">
                            View Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AllvolunteerNeedposts;
