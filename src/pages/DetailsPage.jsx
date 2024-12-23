import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const details = useLoaderData();
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
    <div className="bg-base-100 shadow-xl mt-8">
      <Helmet>
        <title>Details Page || CarePoint</title>
      </Helmet>
      <div className="text-center">
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">
          Volunteer Opportunity Details
        </h3>
        <p className="w-1/2 mx-auto">
          Learn more about this opportunity and take the first step to becoming
          a volunteer.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 p-6 rounded-lg">
        <figure className="h-full w-full lg:w-96 border-4">
          <img
            className="h-full w-full border-2 object-cover"
            src={thumbnail}
            alt="Opportunity Thumbnail"
          />
        </figure>
        <div className="flex-1">
          <h2 className="card-title"> {title}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
          <p>Location: {location}</p>
          <p>Deadline: {postDeadline}</p>
          <p>
            Volunteers Needed:{" "}
            <span className={volunteers === 0 ? "text-red-500" : ""}>
              {volunteers}
            </span>
          </p>
          <p>Organizer Name: {organizerName}</p>
          <p>Organizer Email: {organizerEmail}</p>

          <div className="w-full border-2 mt-4">
            {volunteers === 0 || volunteers < 0 ? (
              <p className="text-red-500 text-center py-2">
                No more volunteers are needed for this opportunity.
              </p>
            ) : (
              <Link to={`/beAVolunteer/${_id}`}>
                <button className="btn btn-primary w-full">
                  Be a Volunteer
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
