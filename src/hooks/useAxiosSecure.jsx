import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";


export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});


const useAxiosSequre = () => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          logOutUser()
            .then(() => {
              if (error.response?.status === 401) {
                toast.error("Unauthorized Access! Please log in again.");
              } else if (error.response?.status === 403) {
                toast.error("Access denied! Permission required.");
              }
              navigate("/login");
             
            })
            .catch((err) => console.error("Logout error:", err));
        }
        return Promise.reject(error);
      }
    );
  }, [logOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSequre;
