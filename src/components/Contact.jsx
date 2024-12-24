import { useRef, useEffect } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-web"; 
import submitLottieData from "../assets/lottie/submit.json";

const Contact = () => {
  const formRef = useRef();
  const lottieContainer = useRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: submitLottieData,
    });

    return () => {
      Lottie.destroy();
    };
  }, []);

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
        <h1 className="text-4xl font-bold mb-4">Reach Out to Us!</h1>
        <p className="max-w-xl mx-auto text-[gray] text-xl">
          Have something on your mind? Drop us a message, and we’ll get back to
          you!
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-32 flex items-center flex-col md:flex-row gap-2">
        {/* Contact Information */}
        <div className="flex-1 md:text-left  flex-col">
          <div ref={lottieContainer} style={{ width: 600, height: 300 }}></div>{" "}
          {/* Container for the animation */}
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-center text-[var(--highlight)] mb-6">
            Send Us a Message
          </h2>
          <form ref={formRef} onSubmit={handleSubmitForm}>
            <div className="mb-4">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 text-[var(--text-color)] border border-emerald-600 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-[var(--text-color)] border border-emerald-600 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label>Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full p-3 text-[var(--text-color)] resize-none border border-emerald-700 rounded"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative w-full  py-2 px-4  bg-white isolation-auto z-10 border-2 border-emerald-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center text-sm font-semibold text-black    rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
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
