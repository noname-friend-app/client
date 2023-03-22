import { Avatar, Flex, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import Input from "../../components/Input";
import DoinkButton from "../../components/Buton";
import { UserContext } from "../../context/UserContext";
import { useEditProfile } from "../../libs/api";

const ProfileSettings: React.FC = () => {
  const { user } = useContext(UserContext);

  const [name, setName] = useState<string>(user!.profile!.name);
  const [bio, setBio] = useState<string>(user!.profile!.bio);
  const [pronouns, setPronouns] = useState<string>(user!.profile!.pronouns);

  const { mutate } = useEditProfile();

  const buttonProps = {
    type: "submit",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate({
      name,
      bio,
      pronouns,
      birthday: user!.profile!.birthday,
    });
  };

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
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack
            w="100%"
            h="100%"
            spacing={8}
            justifyContent={"center"}
            fontWeight={400}
          >
            <Input
              value={name}
              formLabel="Display Name"
              w="330px"
              setState={setName}
            />
            <Input
              value={pronouns}
              formLabel="Pronouns"
              w="330px"
              setState={setPronouns}
            />
            {/* <Input
              value={birthday}
              formLabel="Birthday"
              w="330px"
              type="date"
              setState={setBirthday}
            /> */}
            <Input value={bio} formLabel="Bio" w="330px" setState={setBio} />
            <DoinkButton w="330px" {...buttonProps} children="Save" />
          </VStack>
        </form>
      </Flex>
    </>
  );
};
export default ProfileSettings;
