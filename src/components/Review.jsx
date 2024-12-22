import React from "react";

const reviews = [

  {
    reviewer_name: "Sofia Rahman",
    reviewer_photo: "https://i.ibb.co/TRCV3Gv/download.png",
    review:
      "Volunteering with this program was an incredible experience. I learned a lot and felt valued throughout the process!",
    role: "Community Volunteer",
    rating: 5,
  },
  {
    reviewer_name: "Imran Hossain",
    reviewer_photo: "https://i.ibb.co/zxLK8cc/download.png",
    review:
      "The program was well-organized, but I wish there were more opportunities for hands-on work.",
    role: "Event Helper",
    rating: 4,
  },
  {
    reviewer_name: "Ayesha Begum",
    reviewer_photo: "https://i.ibb.co/TRCV3Gv/download.png",
    review:
      "I loved participating in this initiative. It was a great way to give back to the community and meet amazing people!",
    role: "Team Leader",
    rating: 5,
  },
];


const Review = () => {
  return (
    <div className="bg-base-200 py-12 pb-20 mt-12">
      {/* Header Section */}
      <div className="text-center md:w-1/2 mx-auto mb-8">
        <h1 className="text-3xl font-semibold mb-4">
          Volunteer Voices
          {/* : Real Stories from Our Heroes */}
        </h1>
        <p className="text-gray-600">
          Read inspiring reviews from our volunteers about their experiences,
          challenges, and the impact they've made in the community.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={review.reviewer_photo}
              alt={review.reviewer_name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />

            <h2 className="text-xl font-semibold capitalize">
              {review.reviewer_name}
            </h2>

            <p className="text-sm text-gray-500">{review.role}</p>

            <div className="flex justify-center mt-2">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i} className="text-yellow-500 text-xl">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - review.rating }, (_, i) => (
                <span key={i} className="text-gray-300 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-gray-600 mt-4 italic">{`"${review.review}"`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
