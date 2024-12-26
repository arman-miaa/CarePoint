import { useRef, useEffect } from "react";
import Swal from "sweetalert2";
// import Lottie from "lottie-web"; 
import submitLottieData from "../assets/lottie/submit.json";
import { useTheme } from "../hooks/ThemeProvider ";
import Lottie from "lottie-react";

const Contact = () => {
  const formRef = useRef();
  
      const { darkMode } = useTheme();
  



  const handleSubmitForm = (e) => {
    e.preventDefault();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your feedback has been submitted successfully!",
      showConfirmButton: false,
      timer: 1500,
    });

    formRef.current.reset();
  };

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h1
          className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
            darkMode ? "" : ""
          }`}
        >
          Reach Out to US! 
        </h1>
        <p className="max-w-xl mx-auto text-[gray] text-xl">
          Have something on your mind? Drop us a message, and we’ll get back to
          you!
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-32 flex items-center flex-col md:flex-row gap-2">
        {/* Contact Information */}
        <div className="flex-1 ">
          <Lottie animationData={submitLottieData}></Lottie>
        </div>

        {/* Contact Form */}
        <div
          className={`  flex-1 p-6 rounded-xl ${
            darkMode
              ? "bg-transparent border-2 border-emerald-700 rounded-xl"
              : "bg-base-200"
          } rounded shadow`}
        >
          <h2
            className={` text-2xl mt-4 md:text-3xl text-center lg:text-5xl font-bold mb-4 text-emerald-700 ${
              darkMode ? "" : ""
            }`}
          >
            Send Us a Message
          </h2>
          <form ref={formRef} onSubmit={handleSubmitForm}>
            <div className="mb-4">
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className={`input w-full mt-2 border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className={`label-text font-semibold ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className={`textarea textarea-bordered w-full resize-none mt-2 border-emerald-700 bg-transparent  focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`relative w-full  py-2 px-4  ${
                darkMode
                  ? "bg-transparent text-white"
                  : "bg-transparent text-black"
              } isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
