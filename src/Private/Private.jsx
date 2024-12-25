import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../pages/Loading";

const Private = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const axiosInstance = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    if (user?.email) {
      // Check token validity
      axiosInstance
        .get("/checkToken", { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setIsTokenValid(true); 
          }
        })
        .catch((err) => {
          console.error("Token validation failed:", err);
          logout(); 
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false); 
    }
  }, [user, axiosInstance, logout]);

  if (loading) {
    return <Loading />; 
  }

  if (!user || !isTokenValid) {
    return <Navigate to="/login" replace />; 
  }

  return children; 
};

export default Private;
