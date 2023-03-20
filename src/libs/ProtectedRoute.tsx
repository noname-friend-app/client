import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  let location = useLocation();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
      if (!user) {
        navigate("/login");
      } else {
        if (!user.profile && location.pathname !== "/create-profile") {
          navigate("/create-profile");
        }
      }
  }, [user, navigate, location.pathname]);


  return children;
};

export default ProtectedRoute;
