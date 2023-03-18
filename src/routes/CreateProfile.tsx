import {
  Avatar,
  Box,
  Center,
  ChakraProvider,
  Flex,
  FormControl,
  Heading,
  Text,
} from "@chakra-ui/react";
import DoinkButton from "../components/Buton";
import Input from "../components/Input";
// import Logout from "../components/Logout";
import theme from "../utils/theme";

const CreateProfile: React.FC = () => {
  // const [name, setname] = useState<string>("");
  // const [bio, setbio] = useState<string>("");
  // const [birthday, setbirthday] = useState<string>("");
  // const [pronouns, setPronouns] = useState<string>("");

  // const navigate = useNavigate();
  // const { mutate } = useLogin();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   mutate({ name, bio: birthday, pronouns });
  // };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Center
          w="100%"
          h="100vh"
          p={{ base: 3, md: 5 }}
          bg="purple.300"
          flexDir={"column"}
        >
          <Heading mb={5} fontSize={"60px"}>
            Create Profile
          </Heading>
          {/* MAIN BOX */}
          <Box w="430px" h="500" bg="purple.200" borderRadius={"15"}>
            {/* PHOTO AND USERNAME AND EMAIL */}
            <Flex justify={"center"} mt={"8"}>
              <Avatar
                size={"xl"}
                src={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
                // alt={"Author"}
              />
              <Flex flexDir={"column"} justify={"center"} ml={2}>
                <Text fontSize={"30px"} fontWeight="bold">
                  T H I R T
                </Text>
                <Text fontWeight={"light"}>Quandaledingle@gmail.com</Text>
              </Flex>
            </Flex>
            {/* INPUTS */}
            <Flex justifyContent={"center"} >
              <Center h="100%" flexDir={"column"}>
                <form>
                  <Input
                    value=""
                    onChange={() => {}}
                    formLabel=" Display Name"
                    w="300px"
                  />
                  <Flex
                    flexDir={"row"}
                    justify="space-between"
                    // bg="green"
                    w="365px"

                  >
                    <Input
                      value=""
                      onChange={() => {}}
                      formLabel="Pronouns"
                      w="75px"
                    />
                    <Input
                      value=""
                      onChange={() => {}}
                      formLabel="Birthday"
                      w="100px"
                      type="date"
                    />
                  </Flex>
                  <Input
                    value=""
                    onChange={() => {}}
                    formLabel="Bio"
                    w="300px"
                  />
                  <Flex  justify={"center"}>
                    <DoinkButton children="Save" />
                  </Flex>
                </form>
              </Center>
            </Flex>
          </Box>
        </Center>
      </ChakraProvider>
      {/* <Logout /> */}
    </>
  );
};

export default CreateProfile;
