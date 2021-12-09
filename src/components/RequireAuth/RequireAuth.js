import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading_Spinner from '../../assets/dribbble-spinner-800x600.gif';
import useAuth from "../../hooks/useAuth";
const RequireAuth = ({ children }) => {
  let { user, loading } = useAuth();
  let location = useLocation();
  if (loading) {
    return (
      <div  className="loading h-screen flex justify-center items-center">
       <img width='130px' src={Loading_Spinner} alt="" />
      </div>
    );
  }
  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
