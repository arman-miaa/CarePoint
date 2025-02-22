import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "../hooks/AuthProvider";
import { useTheme } from "../hooks/ThemeProvider ";
import lottieSignUp from '../assets/lottie/signup.json';
import Lottie from "lottie-react";

const SignUp = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
    const { darkMode, toggleTheme } = useTheme();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

  
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long, include at least one uppercase letter, and one lowercase letter."
      );
      toast.error(
        "Password must be at least 6 characters long, include one uppercase letter, and one lowercase letter."
      );
      return;
    }

    setError(""); 

    
    createUser(email, password)
      .then((result) => {
       
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            toast.success("Account created successfully!");
            navigate("/"); 
          })
          .catch((error) => {
            setError("Profile update failed. Please try again.");
            toast.error("Profile update failed. Please try again.");
          });
      })
      .catch((error) => {
      
        if (error.code === "auth/email-already-in-use") {
          setError(
            "This email is already in use. Please try another email address."
          );
          toast.error(
            "This email is already in use. Please try another email address.",
            {
              position: "top-center",
            }
          );
        } else {
          setError("Sign-up failed. Please try again.");
          toast.error("Sign-up failed. Please try again.");
        }
      });
  };

  return (
    <div className="hero min-h-screen">
      <Helmet>
        <title>SignUp Page || CarePoint</title>
      </Helmet>
      <div className="flex items-center justify-between flex-col md:flex-row">
        <div className="flex-1">
          <Lottie animationData={lottieSignUp}></Lottie>
        </div>
        <div
          className={`${
            darkMode ? "bg-gray-800 border-emerald-800 border-2" : "bg-base-200"
          } shadow-xl card flex-1 w-full max-w-md  rounded-lg mt-6`}
        >
          <div className="text-center">
            <h1
              className={` text-2xl mt-4 md:text-3xl lg:text-5xl font-bold mb-4 text-emerald-700 ${
                darkMode ? "" : ""
              }`}
            >
              Join US!
            </h1>
            <p
              className={`text-lg w-4/5 mx-auto ${
                darkMode ? "text-gray-400" : "text-black"
              }`}
            >
              Sign up to join and explore exciting volunteer opportunities
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={`input  border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                required
                className={`input  border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={`input  border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span
                  className={`label-text font-semibold ${
                    darkMode ? "text-gray-400" : "text-black"
                  }`}
                >
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className={`input  border-emerald-700 bg-transparent input-bordered focus:outline-none focus:ring-2 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs bg-emerald-600 text-gray-200 hover:bg-emerald-700 border-none absolute text-xl  right-12 mt-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn text-white bg-emerald-700 border-none hover:bg-emerald-800">
                Sign Up
              </button>
              <p
                className={`label-text font-semibold text-center mt-4 ${
                  darkMode ? "text-gray-400" : "text-black"
                }`}
              >
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold underline text-emerald-700"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
