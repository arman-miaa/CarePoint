import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../pages/Loading";
import { Link } from "react-router-dom";
// import { AuthContext } from "../hooks/AuthProvider";
import { useTheme } from "../hooks/ThemeProvider ";
import notFound from "../assets/not-found.png";


const VolunteerNeeds = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { darkMode } = useTheme();

  // console.log(volunteerPosts);

  useEffect(() => {
    axios
      .get("https://ph-assignment-11-server-brown.vercel.app/volunteerPosts")
      .then((res) => {
        setVolunteerPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div id="details" className="mt-12 lg:mt-16">
          {/* title and description */}
          <div className="text-center">
            <h2
              className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
                darkMode ? "" : ""
              }`}
            >
              Urgent Volunteer Opportunities
            </h2>
            <p
              className={`label-text md:w-1/2 mx-4 md:mx-auto mt-2 font-semibold ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Discover the most urgent volunteer opportunities with approaching
              deadlines. Join hands to make an impact today by exploring these
              highlighted posts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {volunteerPosts.map((volunteerPost) => (
              <div key={volunteerPost._id}>
                <div className="card h-full card-compact bg-base-200  shadow-xl">
                  <figure>
                    <img
                      className="w-full h-48 object-cover rounded-xl" 
                      src={
                        volunteerPost?.thumbnail
                          ? volunteerPost?.thumbnail
                          : notFound
                      } 
                      alt="Image Not Found"
                      onError={(e) => (e.target.src = notFound)} 
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="card-title text-emerald-700 font-bold md:text-2xl">
                      {volunteerPost.title}
                    </h2>
                    <p className="font-semibold md:text-lg">
                      <span className="font-semibold md:text-xl">
                        Category:{" "}
                      </span>
                      {volunteerPost.category}
                    </p>
                    <p className="font-semibold md:text-lg">
                      <span className="font-semibold md:text-xl">
                        Location:{" "}
                      </span>
                      {volunteerPost.location}
                    </p>
                    <p className="font-semibold md:text-lg">
                      <span className="font-semibold md:text-xl">
                        Deadline:{" "}
                      </span>

                      {new Date(volunteerPost.postDeadline).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        }
                      )}
                    </p>

                    <div className="w-full mt-auto">
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
        </div>
      )}
      <div className="mx-auto w-full mt-8 text-center ">
        <Link to="/AllvolunteerNeedposts">
          <button className="relative  py-2 px-4  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeeds;
