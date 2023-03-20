import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  let location = useLocation();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      if (!user.profile && location.pathname !== "/create-profile") {
        navigate("/create-profile");
      }
    }
    setLoading(false);
  }, [user, loading, navigate, location.pathname]);

  if (loading) return null

  return children;
};

export default ProtectedRoute;
