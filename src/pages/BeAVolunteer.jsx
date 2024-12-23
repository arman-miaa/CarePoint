import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const BeAVolunteer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const details = useLoaderData();
  console.log(details._id);

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
      volunteerName,
      volunteerEmail,
      suggestion,
      status,
      postId: details._id,
    };
    console.log(postData);
    axios
      .post(
        "https://ph-assignment-11-server-brown.vercel.app/volunteerRequests",
        postData
      )
      .then((res) => {
        toast.success("Added on database successfully!");
        navigate("/AllvolunteerNeedposts");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 bg-white rounded shadow">
      <Helmet>
        <title>Be A Volunteer Page || CarePoint</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-6">
        Add Volunteer Need Post
      </h1>
      <form onSubmit={handleSubmitForm} className="space-y-4">
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
          <input
            name="category"
            defaultValue={category}
            className="select select-bordered w-full"
            required
            readOnly
          ></input>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={location}
            readOnly
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
            readOnly
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
            required
            name="postDeadline"
            selected={new Date(postDeadline)}
            readOnly
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
        <div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Volunteer Name
            </label>
            <input
              type="text"
              name="volunteerName"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full bg-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Voluntter Email
            </label>
            <input
              type="email"
              name="volunteerEmail"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full bg-gray-200"
            />
          </div>
        </div>
        <div>
          <div>
            <label className="block text-sm font-medium mb-1">Suggestion</label>
            <textarea
              name="suggestion"
              placeholder="Enter your suggestion"
              className="textarea textarea-bordered w-full resize-none"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <input
              type="text"
              name="status"
              defaultValue="requested"
              className="input input-bordered w-full bg-gray-200"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Request
        </button>
      </form>
    </div>
  );
};

export default BeAVolunteer;
