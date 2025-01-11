import React from "react";
import { useTheme } from "../hooks/ThemeProvider ";

const OurBlogs = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        {/* Blog Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Our Blog</h2>
          <p className={`text-lg ${darkMode ? "text-gray-400" : "text-black"}`}>
            Stay updated with the latest insights and stories from CarePoint.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog 1"
              className="w-1/2 h-64 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                Blog Post Title 1
              </h3>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                This is a brief description of the first blog post. It provides
                insights into the topic discussed and leaves the reader curious
                for more.
              </p>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog 2"
              className="w-1/2 h-64 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                Blog Post Title 2
              </h3>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Here is the description for the second blog post. It's an
                interesting read for those who want to learn more about
                CarePoint's mission and values.
              </p>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog 3"
              className="w-1/2 h-64 object-cover"
            />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                Blog Post Title 3
              </h3>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                The third post offers a deep dive into community initiatives and
                volunteer work. It's a must-read for those looking to get
                involved with CarePoint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
