import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import DatePicker from "react-datepicker";
// import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import useAxiosSequre from "../hooks/useAxiosSecure";
import { useTheme } from "../hooks/ThemeProvider ";
import Loading from "./Loading";

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosInstance = useAxiosSequre();
  const { darkMode } = useTheme();
    const [loader, setLoader] = useState(true);

  

  const details = useLoaderData();
  // Check if the response contains the "Unauthorized access1" message
  // if (details?.message === "Unauthorized access1") {
  //   toast.error("Your token or email is invalid");
  //   return null; // Prevent rendering the page if unauthorized
  // }
 
    useEffect(() => {
      if (details) {
        setLoader(false);
      }
    }, [details]);

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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteers = Number(form.volunteers.value);

    const postDeadline = form.postDeadline.value;
    const organizerName = form.userName.value;
    const organizerEmail = form.userEmail.value;
    const volunteerName = form.volunteerName.value;
    const volunteerEmail = form.volunteerEmail.value;
    const suggestion = form.suggestion.value;
    const status = form.status.vaule;

  

    const postData = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteers,
      postDeadline,
      organizerName,
      organizerEmail,
      volunteerName,
      volunteerEmail,
      suggestion,
      status,
      postId: details._id,
    };
   
    axiosInstance
      .post("/volunteerRequests", postData, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success("Added on database successfully!");
        navigate("/AllvolunteerNeedposts");
      })
      .catch((error) => {
               toast.warn("Data addeding failed!");

      });
  };

  return (
    <div>
      {loader ? (
        <Loading />
      ) : (
        <div
          className={`max-w-3xl  mx-auto mt-10 p-6 ${
            darkMode
              ? "bg-transparent border-2 border-emerald-700 rounded-xl"
              : "bg-base-200"
          } rounded shadow`}
        >
          <Helmet>
            <title>Be A Volunteer Page || CarePoint</title>
          </Helmet>
          <h1
            className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
              darkMode ? "" : ""
            }`}
          >
            Be A Volunteer
          </h1>
          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Thumbnail
              </label>
              <input
                type="url"
                defaultValue={thumbnail}
                name="thumbnail"
                readOnly
                placeholder="Enter image URL"
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Post Title
              </label>
              <input
                type="text"
                name="title"
                readOnly
                defaultValue={title}
                placeholder="Enter post title"
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Description
              </label>
              <textarea
                name="description"
                readOnly
                defaultValue={description}
                placeholder="Enter description"
                // className="textarea textarea-bordered w-full resize-none"
                className={`textarea textarea-bordered w-full resize-none mt-2 border-emerald-700 bg-transparent  focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              ></textarea>
            </div>
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Category
              </label>
              <input
                name="category"
                defaultValue={category}
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
                readOnly
              ></input>
            </div>
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={location}
                readOnly
                placeholder="Enter location"
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                No. of Volunteers Needed
              </label>
              <input
                type="number"
                name="volunteers"
                defaultValue={volunteers}
                readOnly
                placeholder="Enter number"
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div>
              <label
                className={`label-text font-semibold mr-1 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Deadline
              </label>
              <DatePicker
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                dateFormat="yyyy-MM-dd"
                required
                name="postDeadline"
                selected={new Date(postDeadline)}
                readOnly
              />
            </div>
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Organizer Name
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={organizerName}
                readOnly
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              />
            </div>
            <div>
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Organizer Email
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={organizerEmail}
                readOnly
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              />
            </div>
            <div>
              <div>
                <label
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Volunteer Name
                </label>
                <input
                  type="text"
                  name="volunteerName"
                  defaultValue={user?.displayName}
                  readOnly
                  className={`input w-full my-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Voluntter Email
                </label>
                <input
                  type="email"
                  name="volunteerEmail"
                  defaultValue={user?.email}
                  readOnly
                  className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Suggestion
                </label>
                <textarea
                  name="suggestion"
                  placeholder="Enter your suggestion"
                  // className="textarea textarea-bordered w-full resize-none"
                  className={`textarea textarea-bordered w-full resize-none mt-2 border-emerald-700 bg-transparent  focus:outline-none focus:ring-2 ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                  required
                ></textarea>
              </div>
              <div>
                <label
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Status
                </label>
                <input
                  type="text"
                  name="status"
                  defaultValue="requested"
                  className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn text-gray-50 hover:bg-emerald-800 bg-emerald-700 border-none w-full"
            >
              Request
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BeAVolunteer;
