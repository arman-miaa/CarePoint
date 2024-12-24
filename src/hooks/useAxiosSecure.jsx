import axios from "axios";
import { useContext, useEffect } from "react";
// import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSequre = () => {
    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error caught in interceptor', error.status);

            if (error.status === 401 || error.status === 403) {
                console.log('need to logout the user');
                logOutUser()
                  .then(() => {
                    console.log("logged out user");
                    toast.success("logged out user successfully,");
                    navigate("/login");
                  })
                  .catch((error) => console.log(error));
            }



            return Promise.reject(error)
        })
    },[])

    return axiosInstance;

    
};

export default useAxiosSequre;
