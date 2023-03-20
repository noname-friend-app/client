import { Heading } from "@chakra-ui/react";
import { useLogout } from "../libs/api";
import Button from "./Buton";

interface Props {
  asButton?: boolean;
  children?: React.ReactNode;
}
const Logout: React.FC<Props> = ({ asButton = false, children="Logout" }) => {
  const { mutate } = useLogout();
  return (
    <>
      {asButton ? (
        <Button
          onClick={() => mutate()}
          w={100}
          bg={"purple.200"}
          color="white"
        >
          Logout
        </Button>
      ) : (
        <Heading
          _hover={{ cursor: "pointer", color: "purple.100" }}
          size="sm"
          onClick={() => mutate()}
        >
          {children}
        </Heading>
      )}
    </>
  );
};

export default Logout;
