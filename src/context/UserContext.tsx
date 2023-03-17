import { createContext, useState } from "react";
import Loading from "../components/Loading";
import { useSession } from "../libs/api";

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
  const { isLoading } = useSession({ setUser });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {!isLoading ? children : <Loading />}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
