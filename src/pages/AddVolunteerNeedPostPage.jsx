import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { toast } from "react-toastify";
import { AuthContext } from "../hooks/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AddVolunteerNeedPostPage = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const [deadline, setDeadline] = useState(new Date());
  const handleDateChange = (date) => {
    setDeadline(date);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteers = Number(form.volunteers.value);
    const postDeadline = deadline;
    const organizerName = form.userName.value;
    const organizerEmail = form.userEmail.value;

    // console.log(thumbnail, title, description, category, location, volunteers, postDeadline, organizerName, organizerEmail);

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
    };
    console.log(postData);
    axios
      .post("http://localhost:5000/volunteerPosts", postData)
      .then((res) => {
        // console.log(res.data)
        toast.success("Added on database successfully!");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-6">
        Add Volunteer Need Post
      </h1>
      <form onSubmit={handleSubmitForm} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Thumbnail</label>
          <input
            type="url"
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
            placeholder="Enter post title"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered w-full resize-none"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
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
            placeholder="Enter number"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Deadline</label>
          <DatePicker
            selected={deadline}
            onChange={handleDateChange}
            className="input input-bordered w-full"
            dateFormat="yyyy-MM-dd"
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
            value={user?.displayName}
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
            value={user?.email}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteerNeedPostPage;
