import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useCreateProfile } from "../../libs/api/mutations";
import { UserContext } from "../../context/UserContext";
import Logout from "../../components/Logout";
import ProfilePicture from "../../components/ProfilePicture";

const CreateProfile: React.FC = () => {
  const [name, setName] = useState<any>("");
  const [bio, setBio] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [pronouns, setPronouns] = useState<string>("");

  const { mutate, isPending } = useCreateProfile();
  const { user } = useContext(UserContext);

  const buttonProps = {
    type: "submit",
    isDisabled:
      isPending ||
      name.length < 1 ||
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
          <Box
            w={{ base: "100%", md: "430px" }}
            h={{ base: "auto", md: "500px" }}
            bg="purple.200"
            rounded={10}
            p={8}
          >
            {/* PHOTO AND USERNAME AND EMAIL */}
            <Flex justify={"center"} mb={2}>
              <ProfilePicture seed={user!.id} size="lg" />
              <Flex flexDir={"column"} justify={"center"} ml={2}>
                <Text fontSize={"30px"} fontWeight="bold">
                  {user!.username}
                </Text>
                <Text fontWeight={"light"}>{user!.email}</Text>
              </Flex>
            </Flex>

            {/* INPUTS */}
            <Center w="100%">
              <form style={{ width: "330px" }} onSubmit={handleSubmit}>
                <VStack w="100%" h="100%" spacing={8} justifyContent={"center"}>
                  <Input
                    value={name}
                    formLabel=" Display Name"
                    w="330px"
                    setState={setName}
                    isRequired={true}
                  />
                  <HStack w="100%">
                    <Input
                      value={pronouns}
                      formLabel="Pronouns"
                      w="100px"
                      setState={setPronouns}
                      isRequired={true}
                    />
                    <Input
                      value={birthday}
                      formLabel="Birthday"
                      w="100%"
                      type="date"
                      setState={setBirthday}
                      isRequired={true}
                    />
                  </HStack>
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
            </Center>
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default CreateProfile;
