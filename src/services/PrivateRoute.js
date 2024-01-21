// PrivateRoute.js
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ element }) => {
  const { user, fetchUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
      setIsLoading(false);
    };

    fetchData();
  }, [fetchUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
