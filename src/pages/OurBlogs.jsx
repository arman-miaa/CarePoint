import React from "react";
import { useTheme } from "../hooks/ThemeProvider ";
import blog1 from '../../src/assets/blog1.webp';
import blog2 from '../../src/assets/blog2.webp';
import blog3 from '../../src/assets/blog3.jpg';

const OurBlogs = () => {
  const { darkMode } = useTheme();

  // Array of blog posts
 const blogs = [
   {
     id: 1,
     title: "Helping Flood Victims Rebuild Their Lives",
     description:
       "This blog post focuses on efforts to help communities affected by flooding, providing them with resources, aid, and support for rebuilding their homes and livelihoods.",
     imageUrl: blog1, 
     category: "Disaster Relief",
     date: "2025-01-11",
   },
   {
     id: 2,
     title: "Helping Women Build Careers in Construction",
     description:
       "This blog post highlights the importance of supporting women in the construction industry and how they are breaking barriers and building careers. Read about initiatives to empower women in this traditionally male-dominated field.",
     imageUrl: blog2,
     category: "Women Empowerment",
     date: "2025-01-11",
   },
   {
     id: 3,
     title: "Poor Children's Education and Care",
     description:
       "In this blog post, we will discuss how to focus on the education of poor children, the importance of basic education for them, and the need for societal support.",
     imageUrl: blog3,
     category: "Education",
     date: "2025-01-11",
   },
 ];


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
        <div className="grid grid-cols-1  gap-8">
          {blogs.map((blog) => (
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 border-2">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full rounded-xl h-72 object-cover"
                />
              </div>
              <div className="flex-1">
                

                <div className="p-6 ">
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                    {blog.title}
                  </h3>
                  <p
                    className={`text-base ${
                      darkMode ? "text-gray-400" : "text-black"
                    }`}
                  >
                    {blog.description}
                  </p>
                  <div>
                    <h3>Category: {blog.category}</h3>
                    <p>Date: {blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
