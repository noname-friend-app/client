import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getSession } from "../libs/api";

interface UserContextProps {
  user: Session;
  setUser: (user: Session) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  loading: true,
});

interface UserProviderProps {
  children: JSX.Element;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        if (data.user) {
          setUser(data.user);
          setLoading(false);
        } else {
          setUser(null);
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    }
  }, [data, isLoading]);

  if (loading) return <Loading />;

  return (
    <UserContext.Provider value={{ user, loading, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
