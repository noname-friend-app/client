import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import DoinkButton from "../components/Buton";
import Input from "../components/Input";
import { useProfile } from "../libs/api";
import { UserContext } from "../context/UserContext";
import Logout from "../components/Logout";

const CreateProfile: React.FC = () => {
  const [name, setName] = useState<any>("");
  const [bio, setBio] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [pronouns, setPronouns] = useState<string>("");
  const buttonProps = { type: "submit" };
  const { mutate } = useProfile();
  const { user } = useContext(UserContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate({ name, bio, pronouns, birthday });
  };

  return (
    <>
      <Center
        w="100%"
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
          <Flex justifyContent={"center"}>
            <Center h="100%" flexDir={"column"}>
              <form onSubmit={handleSubmit}>
                <Input
                  value={name}
                  formLabel=" Display Name"
                  w="300px"
                  setState={setName}
                  isRequired={true}
                />
                <Flex flexDir={"row"} justify="space-between" w="365px">
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
                    w="100px"
                    type="date"
                    setState={setBirthday}
                    isRequired={true}
                  />
                </Flex>
                <Input
                  value={bio}
                  formLabel="Bio"
                  w="300px"
                  setState={setBio}
                  isRequired={true}
                />
                <Flex justify={"center"}>
                  <DoinkButton {...buttonProps} children="Save" />
                </Flex>
              </form>
            </Center>
          </Flex>
        </Box>
      </Center>
      <Logout />
    </>
  );
};

export default CreateProfile;
