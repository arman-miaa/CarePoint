import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";

const Private = ({ children }) => {
    const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  
  return <Navigate to="/login" state={{ from: location }} replace />;
  //  navigate("/login", { state: { from: location } });
};

export default Private;
