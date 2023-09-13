import { Center } from "@chakra-ui/react";
import { Suspense, createContext, useEffect, useState } from "react";
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

const UserProviderWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <Suspense
      fallback={
        <Center w="100%" h="100vh">
          <Loading />
        </Center>
      }
    >
      <UserProvider>{children}</UserProvider>
    </Suspense>
  );
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setLoading(false);
    }
  }, [data]);

  if (loading) return <Loading />;

  return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
  );
};

export { UserProvider, UserProviderWrapper, UserContext };
