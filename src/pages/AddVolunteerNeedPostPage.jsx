import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { toast } from "react-toastify";
import { AuthContext } from "../hooks/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { axiosInstance } from "../hooks/useAxiosSecure";
import { useTheme } from "../hooks/ThemeProvider ";

const AddVolunteerNeedPostPage = () => {
  const { user } = useContext(AuthContext);

    const { darkMode } = useTheme();
  

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
   
    axiosInstance
      .post("/volunteerPosts", postData,)
      .then((res) => {
        
        toast.success("Added on database successfully!");
        form.reset();
      })
      .catch((error) => {
               toast.warn("Data added failed!");

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
        <title>Add Volunteer Need Post Page || CarePoint</title>
      </Helmet>
      <h1
        className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
          darkMode ? "" : ""
        }`}
      >
        Add Volunteer Need Post
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
            placeholder="Enter post title"
            className={`textarea textarea-bordered w-full resize-none mt-2 border-emerald-700 bg-transparent  focus:outline-none focus:ring-2 ${
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
            placeholder="Enter description"
            // className="textarea textarea-bordered w-full resize-none"
            className={` textarea-bordered w-full resize-none textarea  mt-2 border-emerald-700 bg-transparent  focus:outline-none focus:ring-2 ${
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
            className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
              darkMode ? "text-gray-400 bg-gray-700" : "text-black"
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
            selected={deadline}
            onChange={handleDateChange}
            className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            required
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
            value={user?.displayName}
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
            value={user?.email}
            readOnly
            className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          />
        </div>
        <button
          type="submit"
          className={`relative w-full  py-2 px-4  ${
            darkMode ? "bg-transparent text-white" : "bg-transparent text-black"
          } isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none`}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteerNeedPostPage;
