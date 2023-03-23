import { Avatar, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Input from "../../components/Input";
import DoinkButton from "../../components/Button";
// import { UserContext } from "../../context/UserContext";
// import { useEditAccount } from "../../libs/api";


// Commented out code until route is added to update account info

const AccountSettings: React.FC = () => {
  // const { user } = useContext(UserContext);
  const [username, setUsername] = useState<string>("user!.username");
  const [email, setEmail] = useState<string>("user!.email");
  const [password, setPassword] = useState<string>("user!.password");

  // const { mutate } = useEditAccount();

  const buttonProps = {
    // type: "submit",
  };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   mutate({
  //     username,
  //     email,
  //     password,
  //   });
  // };

  return (
    <>
      <Flex w="400px" h="500px" flexDir={"column"} align="center">
        <Flex mb={5}>
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <form
          style={{ width: "100%" }}
          // onSubmit={handleSubmit}
        >
          <VStack
            w="100%"
            h="100%"
            spacing={8}
            justifyContent={"center"}
            fontWeight={400}
          >
            <Input
              value={username}
              formLabel="Username"
              w="330px"
              setState={setUsername}
            />
            <Input
              value={email}
              formLabel="Email"
              w="330px"
              setState={setEmail}
            />
            <Input
              value={password}
              formLabel="Password"
              w="330px"
              setState={setPassword}
            />
            <DoinkButton w="330px" {...buttonProps} children="Save" />
          </VStack>
        </form>
      </Flex>
    </>
  );
};
export default AccountSettings;
