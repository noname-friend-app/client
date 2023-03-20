import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import Logout from "../components/Logout";
import { UserContext } from "../context/UserContext";

const Dashboard: React.FC = () => {
  const {user} = useContext(UserContext);

  return (
    <>
      {/* <Heading>{user!.profile!.name}</Heading> */}
      {/* <Logout /> */}
    </>
  );
};

export default Dashboard;
