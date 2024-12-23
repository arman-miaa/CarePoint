import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
    const details = useLoaderData();
    // console.log(details);
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
            Learn more about this opportunity and take the first step to
            becoming a volunteer.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8  p-6 rounded-lg">
          <figure className="h-full w-full lg:w-96  border-4 ">
            <img
              className="h-full w-full border-2 object-cover"
              src={thumbnail}
            />
          </figure>
          <div className="flex-1">
            <h2 className="card-title"> {title}</h2>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p>Location: {location}</p>
            <p>Deadline: {postDeadline}</p>
            <p>Volunteer: {volunteers}</p>
            <p>OrganizerName: {organizerName}</p>
            <p>OrganizerEmail: {organizerEmail}</p>
            <div className="w-full border-2">
              <Link to={`/beAVolunteer/${_id}`}>
                <button className="btn btn-primary w-full">
                  Be a Voluntee
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsPage;