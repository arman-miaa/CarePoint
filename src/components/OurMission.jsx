import mission1 from '../../src/assets/mission1.webp'
import mission2 from '../../src/assets/mission2.webp'
import { useTheme } from '../hooks/ThemeProvider ';

const OurMission = () => {
      const { darkMode } = useTheme();
  
  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center px-4">
        {/* Title and Description with Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 w-5/6 object-cover rounded-lg  flex relative  ">
            <div>
              <img
                src={mission1}
                alt="Mission"
                className="rounded-lg shadow-lg lg:w-3/5 xl:w-3/4 mx-auto"
              />
              <img
                src={mission2}
                alt="Mission"
                className="rounded-lg shadow-lg w-36 absolute hidden lg:flex z-40 right-16 -bottom-12"
              />
            </div>
          </div>
          {/* Right Section: Title and Description */}
          <div className="lg:w-1/2 text-center lg:text-left ">
            <div>
              <h2 className="text-4xl font-bold text-emerald-700 mb-4">
                Our Mission
              </h2>
              <p
                className={`text-lg  mx-auto lg:w-full ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                At VolunteerHub, our mission is to provide accessible volunteer
                opportunities, empowering individuals to make a positive impact
                in underserved communities.
              </p>
            </div>
            {/* Cards Section (To the Right of Image) */}
            <div className="grid grid-cols-1 mt-6 text-left sm:grid-cols-2 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="w-full sm:border-r-2">
                <div className="flex justify-start items-center mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-700 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1v4m0 12v4m-6-6H2m20 0h-4m-6-6l-3 3-3-3M12 5l3 3 3-3M5 12l-3 3 3 3m14-6l3 3-3 3"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-emerald-700">
                    Community Service
                  </h3>
                </div>
                <p
                  className={`label-text font-semibold  ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Volunteering to support and uplift local communities, creating
                  lasting positive change through collective effort.
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-full">
                <div className="flex justify-start items-center mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-700 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1v4m0 12v4m-6-6H2m20 0h-4m-6-6l-3 3-3-3M12 5l3 3 3-3M5 12l-3 3 3 3m14-6l3 3-3 3"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-emerald-700">
                    Skill Sharing
                  </h3>
                </div>
                <p
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Contributing your time, skills, and energy to empower others
                  and foster growth in local communities.
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-full sm:border-r-2">
                <div className="flex justify-start items-center mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-700 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1v4m0 12v4m-6-6H2m20 0h-4m-6-6l-3 3-3-3M12 5l3 3 3-3M5 12l-3 3 3 3m14-6l3 3-3 3"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-emerald-700">
                    Social Impact
                  </h3>
                </div>
                <p
                  className={`label-text font-semibold  ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Social Impact: Driving meaningful change and creating lasting
                  value by addressing societal challenges, improving lives, and
                  empowering communities for a better, more equitable future.
                </p>
              </div>

              {/* Card 4 */}
              <div className="w-full">
                <div className="flex justify-start items-center mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-700 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 1v4m0 12v4m-6-6H2m20 0h-4m-6-6l-3 3-3-3M12 5l3 3 3-3M5 12l-3 3 3 3m14-6l3 3-3 3"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-emerald-700">
                    Volunteer Growth
                  </h3>
                </div>
                <p
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Volunteer Growth: Empowering individuals to enhance their
                  skills, expand their knowledge, and grow personally, all while
                  making a significant impact on communities and society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
