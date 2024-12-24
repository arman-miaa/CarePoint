import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "./Loading";
import { Helmet } from "react-helmet";
import axios from "axios";
import { FaTh, FaTable } from "react-icons/fa"; // Importing Font Awesome icons

const AllvolunteerNeedposts = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
  const initialPosts = useLoaderData();
  const [volunteerPosts, setVolunteerPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("card"); // Default layout is card

  useEffect(() => {
    if (volunteerPosts) {
      setLoader(false);
    }
  }, [volunteerPosts]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allPost?search=${search}`, {
        withCredentials: true,
      })
      .then((res) => {
        setVolunteerPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [search]);

  return (
    <section className="min-h-screen bg-gray-100">
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
              className="btn btn-secondary mr-2"
            >
              <FaTh size={24} />
            </button>
            {/* Table Icon for Table Layout */}
            <button
              onClick={() => setLayout("table")}
              className="btn btn-secondary"
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
                  <div className="card card-compact bg-white shadow-lg rounded-lg overflow-hidden">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt={volunteerPost.title}
                        className="w-full h-48 object-cover"
                      />
                    </figure>
                    <div className="card-body p-4">
                      <h2 className="card-title text-xl font-semibold text-gray-800">
                        {volunteerPost.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        Category: {volunteerPost.category}
                      </p>
                      <p className="text-sm text-gray-600">
                        Deadline:{" "}
                        {new Date(
                          volunteerPost.postDeadline
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </p>
                      <div className="mt-4">
                        <Link to={`/detailsPage/${volunteerPost._id}`}>
                          <button className="btn btn-primary w-full">
                            View Details
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
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Deadline</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {volunteerPosts.map((volunteerPost) => (
                    <tr key={volunteerPost._id}>
                      <td>{volunteerPost.title}</td>
                      <td>{volunteerPost.category}</td>
                      <td>
                        {new Date(
                          volunteerPost.postDeadline
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })}
                      </td>
                      <td>
                        <Link to={`/detailsPage/${volunteerPost._id}`}>
                          <button className="btn btn-primary">
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
