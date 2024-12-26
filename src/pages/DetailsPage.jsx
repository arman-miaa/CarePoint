import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { axiosInstance } from "../hooks/useAxiosSecure";
import { useTheme } from "../hooks/ThemeProvider ";

const DetailsPage = () => {
  // const details = useLoaderData();
  const [details, setDetails] = useState('');
  console.log(details);
  const { id } = useParams();
  // console.log(id);
  const { darkMode } = useTheme();


  useEffect(() => {
    axiosInstance
      .get(`/volunteerPosts/${id}`, {
        
      })
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setLoading(false);
      });
  }, [id]);

  const {
    _id,
    thumbnail,
    title,
    description,
    category,
    location,
    volunteers,
    postDeadline,
    organizerName,
    organizerEmail,
  } = details;

  return (
    <div
      className={`${
        darkMode ? "border-emerald-700 border-2 rounded-xl" : "bg-base-200"
      } md:mt-16 shadow-xl mt-8 p-4`}
    >
      <Helmet>
        <title>Details Page || CarePoint</title>
      </Helmet>
      <div className="text-center">
        <h3
          className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
            darkMode ? "" : ""
          }`}
        >
          Volunteer Opportunity Details
        </h3>
        <p
          className={`label-text md:w-1/2 mx-4 md:mx-auto mt-2 font-semibold ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Learn more about this opportunity and take the first step to becoming
          a volunteer.
        </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row gap-8 p-6 rounded-lg mt-8">
        <figure
          className={`flex-1 h-auto rounded-xl w-full lg:w-96 border-2 ${
            darkMode ? "border-emerald-700 rounded-xl" : ""
          }`}
        >
          <img
            className="h-full w-full border-2 object-cover rounded-xl"
            src={thumbnail}
            alt="Opportunity Thumbnail"
          />
        </figure>
        <div className="flex-1">
          <h2 className="card-title text-emerald-700 font-bold md:text-2xl">
            {" "}
            {title}
          </h2>
          <p
            className={`font-semibold mt-2 ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            <span
              className={`label-text md:w-1/2 mx-4 md:mx-auto mt-2 text-lg font-semibold ${
                darkMode ? "text-gray-400" : "text-black"
              }`}
            >
              Description:
            </span>{" "}
            {description}
          </p>
          <p
            className={`font-semibold  mt-2 ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            <span className="text-[17px]">Category:</span> {category}
          </p>
          <p
            className={`font-semibold ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            <span className="text-[17px]">Location:</span> {location}
          </p>
          <p
            className={`font-semibold ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            <span className="text-[17px]">Deadline:</span> {postDeadline}
          </p>
          <p
            className={`font-semibold  ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            <span className="text-[17px]">Volunteer Needed: </span>
            <span className={volunteers === 0 ? "text-red-500" : ""}>
              {volunteers}
            </span>
          </p>
          <p className="font-semibold text-emerald-600 mt-2 ">
            <span
              className={`${
                darkMode
                  ? "text-gray-400 text-[17px]"
                  : "text-black text-[17px]"
              }`}
            >
              Organizer Name:
            </span>{" "}
            {organizerName}
          </p>
          <p className="font-semibold text-emerald-600">
            {" "}
            <span
              className={`${
                darkMode
                  ? "text-gray-400 text-[17px]"
                  : "text-[17px] text-black"
              }`}
            >
              Organizer Email:
            </span>{" "}
            {organizerEmail}
          </p>

          <div className="w-full border-2 mt-4">
            {volunteers === 0 || volunteers < 0 ? (
              <p className="text-red-500 text-center py-2">
                No more volunteers are needed for this opportunity.
              </p>
            ) : (
              <Link to={`/beAVolunteer/${_id}`}>
                <button className="inline-flex  outline-none w-full text-center mx-auto justify-center items-center px-4 py-2 bg-emerald-600 transition-all duration-300 ease-in-out hover:bg-emerald-700 text-white text-sm font-medium rounded-md shadow-sm hover:scale-105">
                Be A Volunteer
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
