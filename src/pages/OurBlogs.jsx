import React from "react";
import { useTheme } from "../hooks/ThemeProvider ";
import blog1 from '../../src/assets/blog1.webp';
import blog2 from '../../src/assets/blog2.webp';
import blog3 from '../../src/assets/blog3.jpg';
import { MdOutlineDateRange } from "react-icons/md";

const OurBlogs = () => {
  const { darkMode } = useTheme();

  // Array of blog posts
 const blogs = [
   {
     id: 1,
     title: "Helping Flood Victims Rebuild Their Lives",
     description:
       "This blog highlights dedicated efforts to support communities devastated by floods. It delves into initiatives aimed at providing emergency relief, such as food, clean water, and medical supplies, while also focusing on long-term rebuilding and rehabilitation. The post emphasizes the importance of restoring homes, infrastructure, and livelihoods, showcasing how collective action and compassion can help flood victims regain stability and hope for a better future.",
     imageUrl: blog1,
     category: "Disaster Relief",
     date: "2025-01-08",
   },
   {
     id: 2,
     title: "Helping Women Build Careers in Construction",
     description:
       "This blog post sheds light on the vital role of supporting women in the construction industry, where they are breaking barriers and paving the way for a more inclusive workforce. It explores their journey of overcoming challenges in this traditionally male-dominated field and highlights inspiring stories of resilience and determination. Learn about impactful initiatives and programs designed to empower women, provide them with skills, and create opportunities to build thriving careers in construction.",
     imageUrl: blog2,
     category: "Women's Rights",
     date: "2024-12-25",
   },
   {
     id: 3,
     title: "Poor Children's Education and Care",
     description:
       "This blog post emphasizes the critical need to focus on the education of underprivileged children. It explores how providing basic education can open doors to opportunities, improve their quality of life, and contribute to breaking the cycle of poverty. The post also discusses the importance of community and societal support to ensure that these children have access to quality education and a brighter future. ",
     imageUrl: blog3,
     category: "Education",
     date: "2024-12-20",
   },
 ];


  return (
    <div className={`py-16 ${darkMode ? "" : "bg-white"}`}>
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
            <div key={blog.id} className="flex flex-col md:flex-row">
              <div className="flex-1 w-full h-full ">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full rounded-xl xl:h-72 h-72 md:h-full object-cover"
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
                  <div
                    className={`flex items-center gap-4 mt-4 ${
                      darkMode ? "text-gray-400" : "text-black"
                    }`}
                  >
                    <h3>
                      <span className="text-lg font-semibold">Category: </span>{" "}
                      {blog.category}
                    </h3>
                    <p className="flex gap-1  items-center">
                      <MdOutlineDateRange  /> {blog.date}
                    </p>
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
