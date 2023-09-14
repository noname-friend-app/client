import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useLogin } from "../../libs/api/mutations";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const { mutate, isLoading } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username.includes('@')) {
      mutate({ email: username, password });
    } else {
      mutate({ username, password });
    }
  };

  return (
    <>
      <Flex w="100%" h="100vh" p={{ base: 3, md: 5 }} bg="purple.300">
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
              fontSize={{ base: 30, sm: 40, md: 50 }}
              alignSelf={"center"}
            >
              Welcome Back
            </Heading>
            <Text alignSelf={"center"}>Please login to continue</Text>
            <Flex w="100%" justifyContent={"center"}>
              <form
                onSubmit={handleSubmit}
                style={{
                  width: "70%",
                  justifyContent: "center",
                }}
              >
                <Flex w="100%" alignSelf={"center"} flexDir="column">
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    mt={10}
                    variant={"flushed"}
                    color="white"
                    borderColor={"white"}
                    placeholder="Username or Email"
                  />
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mt={5}
                    variant={"flushed"}
                    color="white"
                    borderColor={"white"}
                    type="password"
                    placeholder="Password"
                  />
                  <Text
                    _hover={{ cursor: "pointer", color: "white" }}
                    color="purple.100"
                    mt={3}
                    alignSelf={"end"}
                  >
                    Forgot Password?
                  </Text>
                  <Button
                  isLoading={isLoading}
                    type="submit"
                    bg="white"
                    color="black"
                    w="100%"
                    h={10}
                    mt={5}
                  >
                    Login
                  </Button>
                </Flex>
              </form>
            </Flex>

            <Flex alignSelf={"center"} mt={3}>
              <Text>Dont have an account?</Text>
              <Text
                ml={2}
                onClick={() => navigate("/signup")}
                _hover={{ cursor: "pointer", color: "white" }}
                color="purple.100"
              >
                Sign up
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          className="area"
          // w="0%"
          h="100%"
          ml={2}
          display={{ base: "none", md: "flex" }}
        >
          <ul className="circles-login">
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
      </Flex>
    </>
  );
};

export default Login;
