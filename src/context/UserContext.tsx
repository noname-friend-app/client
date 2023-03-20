import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getSession } from "../libs/api";

interface UserContextProps {
  user: Session;
  setUser: (user: Session) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
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
    console.log('1 - initial')
    if (!isLoading) {
      console.log('2 - done loading')
      if (data) {
        console.log('3 - data')
        if (data.user) {
          console.log('4 - user')
          setUser(data.user);
          setLoading(false);
        } else {
          console.log('4 - no user')
          setUser(null);
          setLoading(false);
        }
      } else {
        console.log('3 - no data')
        setUser(null);
        setLoading(false);
      }
    }
  }, [data, isLoading]);

  if (loading) return <Loading />;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
