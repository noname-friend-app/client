import { Flex, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import Input from "../../components/Input";
import DoinkButton from "../../components/Button";
import { UserContext } from "../../context/UserContext";
import { useEditProfile } from "../../libs/api";
import ProfilePicture from "../../components/ProfilePicture";

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
      <Flex
        w={{ base: "100%", md: "400px" }}
        h="500px"
        flexDir={"column"}
        align="center"
      >
        <Flex mb={4} mt={4}>
          <ProfilePicture seed={user!.username} size="xl" />
        </Flex>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack w="100%" h="100%" spacing={8} fontWeight={400}>
            <Input
              value={name}
              formLabel="Display Name"
              w="100%"
              setState={setName}
            />
            <Input
              value={pronouns}
              formLabel="Pronouns"
              w="100px"
              setState={setPronouns}
            />
            {/* <Input
              value={birthday}
              formLabel="Birthday"
              w="330px"
              type="date"
              setState={setBirthday}
            /> */}
            <Input value={bio} formLabel="Bio" w="100%" setState={setBio} />
            <DoinkButton w="100%" {...buttonProps} children="Save" />
          </VStack>
        </form>
      </Flex>
    </>
  );
};
export default ProfileSettings;
