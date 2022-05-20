import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import UserContext from "./UserProvider";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to="/login" />;
}
