// import '../assets/css/styles.css'
import { Button, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../libs/api/mutations";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const toast = useToast();
  const navigate = useNavigate();
  const { mutate } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'subtle'
      });
    } else if (username.includes("@")) {
      toast({
        title: "Username cannot contain '@' symbol",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: 'top-right',
        variant: 'subtle'
      });
    } else {
      mutate({ email, username, password });
    }
  };
  return (
    <>
      <Flex w="100%" h="100vh" p={{ base: 3, md: 5 }} bg="purple.300">
        <Flex
          className="area"
          w="50%"
          h="100%"
          ml={2}
          display={{ base: "none", md: "flex" }}
        >
          <ul className="circles-signup">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Flex>
        <Flex
          rounded={10}
          w={{ base: "100%", md: "50%" }}
          h="100%"
          bg="purple.200"
          p={5}
          justifyContent="center"
        >
          <Flex
            w={{ base: "100%", md: "70%" }}
            flexDir={"column"}
            alignSelf={"center"}
            color="white"
          >
            <Heading
              fontSize={{ base: 50, sm: 50, md: 60 }}
              alignSelf={"center"}
            >
              Signup
            </Heading>
            <Text alignSelf={"center"}>
              Please create an account to continue
            </Text>
            <Flex w="70%" alignSelf={"center"} flexDir="column">
              <form onSubmit={handleSubmit}>
                <Input
                  mt={10}
                  variant={"flushed"}
                  color="white"
                  borderColor={"white"}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  mt={5}
                  variant={"flushed"}
                  color="white"
                  borderColor={"white"}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  mt={5}
                  variant={"flushed"}
                  color="white"
                  borderColor={"white"}
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  mt={5}
                  variant={"flushed"}
                  color="white"
                  borderColor={"white"}
                  placeholder="Re-enter Password"
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />

                <Button
                  type="submit"
                  bg="white"
                  color="black"
                  w="100%"
                  h={10}
                  mt={5}
                >
                  Signup
                </Button>
              </form>
            </Flex>
            <Flex alignSelf={"center"} mt={3}>
              <Text>Already have an account?</Text>
              <Text
                ml={2}
                onClick={() => navigate("/login")}
                _hover={{ cursor: "pointer", color: "white" }}
                color="purple.100"
              >
                Login
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Signup;
