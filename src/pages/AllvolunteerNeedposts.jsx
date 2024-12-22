import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Loading from "./Loading";
import { Helmet } from "react-helmet";

const AllvolunteerNeedposts = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);
  // console.log(user);
  const volunteerPosts = useLoaderData();

  console.log(volunteerPosts);
  useEffect(() => {
    if (volunteerPosts) {
      setLoader(false);
    }
  }, [volunteerPosts]);
  return (
    <section className=" min-h-screen">
      {loader ? (
        <Loading></Loading>
      ) : (
        <div className="container mx-auto px-4 py-12">
          <Helmet>
            <title>All voluteer need posts page || CarePoint</title>
          </Helmet>
          <h2 className="text-3xl font-bold text-center mb-6 ">
            All voluteer need posts page
          </h2>
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
    </section>
  );
};

export default AllvolunteerNeedposts;
