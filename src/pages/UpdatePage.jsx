import {  useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import useAxiosSequre from "../hooks/useAxiosSecure";
import { useTheme } from "../hooks/ThemeProvider ";

const UpdatePage = () => {
  
  const updatePost = useLoaderData();

  const axiosInstance = useAxiosSequre();
      const { darkMode } = useTheme();
  
  // Check if the response contains the "Unauthorized access1" message
  // if (updatePost?.message === "Unauthorized access1") {
  //   toast.error("Your token or email is invalid");
  //   return null; // Prevent rendering the page if unauthorized
  // }

  const navigate = useNavigate();

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
  } = updatePost;

  // State to manage the selected deadline
  const [selectedDate, setSelectedDate] = useState(
    postDeadline ? new Date(postDeadline) : null
  );

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteers = Number(form.volunteers.value);

    const formattedDate = selectedDate
      ? selectedDate.toISOString().split("T")[0]
      : null;

    const updateData = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteers,
      postDeadline: formattedDate,
      organizerName,
      organizerEmail,
    };

    axiosInstance
      .patch(`/updatePost/${_id}`, updateData, {
        withCredentials: true,
      })
      .then((res) => {
       
        toast.success("Post updated successfully!");
        navigate("/ManageMyPosts");
      })
      .catch((error) => {
       
        toast.error("Failed to update the post.");
      });
  };

  return (
    <div
      className={`max-w-3xl  mx-auto mt-10 p-6 ${
        darkMode
          ? "bg-transparent border-2 border-emerald-700 rounded-xl"
          : "bg-base-200"
      } rounded shadow`}
    >
      <Helmet>
        <title>Update Page || CarePoint</title>
      </Helmet>
      <h1
        className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
          darkMode ? "" : ""
        }`}
      >
        Update Volunteer Need Post
      </h1>
      <form onSubmit={handleUpdatePost} className="space-y-4">
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
          <select
            name="category"
            defaultValue={category}
            className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="socialService">Social Service</option>
            <option value="animalWelfare">Animal Welfare</option>
          </select>
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
            min={1}
            defaultValue={volunteers}
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
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select deadline"
            required
            minDate={new Date()}
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
              darkMode ? "text-gray-400" : "text-black bg-white"
            }`}
          />
        </div>

        <button
          type="submit"
          className={`relative w-full  py-2 px-4  bg-transparent ${
            darkMode ? "text-white" : "text-black"
          } isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none`}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
