import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  let location = useLocation();
  const { user } = useContext(UserContext);
  if (!user) return <Navigate to="/login" />;
  if (!user.profile && location.pathname !== "/create-profile")
    return <Navigate to="/create-profile" />;
  return children;
};

export default ProtectedRoute;
