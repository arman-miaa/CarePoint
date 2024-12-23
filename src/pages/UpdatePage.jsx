import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);
  const updatePost = useLoaderData();

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

    axios
      .patch(`http://localhost:5000/updatePost/${_id}`, updateData)
      .then((res) => {
        console.log(res.data);
        toast.success("Post updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        toast.error("Failed to update the post.");
      });
    };
    
   

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white rounded shadow">
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

        <button type="submit" className="btn btn-primary w-full">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default BeAVolunteer;
