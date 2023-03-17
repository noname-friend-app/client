import { createContext, useState } from "react";
import Loading from "../components/Loading";
import { fetchSession } from "../libs/api";
import { useQuery } from "@tanstack/react-query";

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
  const { isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    onError: () => {
      setUser(null);
    },
    onSuccess: (data) => {
      setUser(data);
    },
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!isLoading && children ? children : <Loading />}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
