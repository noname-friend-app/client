import { Button } from "@chakra-ui/react";

const DoinkButton = () => {
  return (
    <>
      <Button
        bg={"white"}
        color="black"
        fontWeight={"light"}
        w="200px"
        _hover={{ color: "white", background: "purple.100" }}
      >
        Login
      </Button>
    </>
  );
};

export default DoinkButton;
