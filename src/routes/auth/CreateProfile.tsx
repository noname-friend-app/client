import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useProfile } from "../../libs/api";
import { UserContext } from "../../context/UserContext";
import Logout from "../../components/Logout";

const CreateProfile: React.FC = () => {
  const [name, setName] = useState<any>("");
  const [bio, setBio] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [pronouns, setPronouns] = useState<string>("");
  
  const { mutate, isLoading } = useProfile();
  const { user } = useContext(UserContext);

  const buttonProps = {
    type: "submit",
    isDisabled:
      isLoading || name.length < 1 ||
      bio.length < 1 ||
      birthday.length < 1 ||
      pronouns.length < 1,
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate({ name, bio, pronouns, birthday });
  };

  return (
    <>
      <Flex w="100%" h="100vh" flexDir={"column"}>
        <Flex alignSelf={"end"} mr={3} mt={3}>
          <Logout asButton={true} />
        </Flex>

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
              />
              <Flex flexDir={"column"} justify={"center"} ml={2}>
                <Text fontSize={"30px"} fontWeight="bold">
                  {user!.username}
                </Text>
                <Text fontWeight={"light"}>{user!.email}</Text>
              </Flex>
            </Flex>

            {/* INPUTS */}
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <VStack w="100%" h="100%" spacing={8} justifyContent={"center"}>
                <Input
                  value={name}
                  formLabel=" Display Name"
                  w="330px"
                  setState={setName}
                  isRequired={true}
                />
                <Flex flexDir={"row"} justify="space-between" w="330px">
                  <Input
                    value={pronouns}
                    formLabel="Pronouns"
                    w="75px"
                    setState={setPronouns}
                    isRequired={true}
                  />
                  <Input
                    value={birthday}
                    formLabel="Birthday"
                    w="120px"
                    type="date"
                    setState={setBirthday}
                    isRequired={true}
                  />
                </Flex>
                <Input
                  value={bio}
                  formLabel="Bio"
                  w="330px"
                  setState={setBio}
                />
                <Button w="330px" {...buttonProps}>
                  Save
                </Button>
              </VStack>
            </form>
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default CreateProfile;
