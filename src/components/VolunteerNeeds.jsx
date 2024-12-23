import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../pages/Loading";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";

const VolunteerNeeds = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(volunteerPosts);

  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteerPosts")
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
        <div className="mt-12">
          {/* title and description */}
          <div className="text-center">
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Urgent Volunteer Opportunities
            </h2>
            <p className="w-1/2 mx-auto mt-4">
              Discover the most urgent volunteer opportunities with approaching
              deadlines. Join hands to make an impact today by exploring these
              highlighted posts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {volunteerPosts.map((volunteerPost) => (
              <div key={volunteerPost._id}>
                <div className="card card-compact bg-base-100  shadow-xl">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{volunteerPost.title}</h2>
                    <p>Category: {volunteerPost.category}</p>
                    <p>
                      Deadline:{" "}
                      {new Date(volunteerPost.postDeadline).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        }
                      )}
                    </p>

                    <div className="w-full">
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
        </div>
      )}
      <div className="mx-auto w-full mt-8 text-center ">
        <Link to="/AllvolunteerNeedposts">
          <button className="btn btn-primary">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeeds;
