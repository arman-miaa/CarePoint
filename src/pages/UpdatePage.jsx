import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import useAxiosSequre from "../hooks/useAxiosSecure";

const UpdatePage = () => {
  const { user } = useContext(AuthContext);
  const updatePost = useLoaderData();
  console.log(updatePost);
  const axiosInstance = useAxiosSequre();
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
        console.log(res.data);
        toast.success("Post updated successfully!");
        navigate("/ManageMyPosts");
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        toast.error("Failed to update the post.");
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white rounded shadow">
      <Helmet>
        <title>Update Page || CarePoint</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-6">
        Update Volunteer Need Post
      </h1>
      <form onSubmit={handleUpdatePost} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Thumbnail</label>
          <input
            type="url"
            defaultValue={thumbnail}
            name="thumbnail"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Post Title</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Enter post title"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            placeholder="Enter description"
            className="textarea textarea-bordered w-full resize-none"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            defaultValue={category}
            className="select select-bordered w-full"
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
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={location}
            placeholder="Enter location"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            name="volunteers"
            defaultValue={volunteers}
            placeholder="Enter number"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Deadline</label>
          <DatePicker
            className="input input-bordered w-full"
            dateFormat="yyyy-MM-dd"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select deadline"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Organizer Name
          </label>
          <input
            type="text"
            name="userName"
            defaultValue={organizerName}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Organizer Email
          </label>
          <input
            type="email"
            name="userEmail"
            defaultValue={organizerEmail}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>

        <button
          type="submit"
          className="relative w-full  py-2 px-4  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
