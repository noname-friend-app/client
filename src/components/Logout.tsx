import { Heading } from "@chakra-ui/react";
import { useLogout } from "../libs/api";
import Button from "./Buton";

interface Props {
  asButton?: boolean;
}
const Logout: React.FC<Props> = ({ asButton = false }) => {
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
          Logout
        </Heading>
      )}
    </>
  );
};

export default Logout;
