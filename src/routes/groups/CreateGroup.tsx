import { Flex, Center, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import DoinkButton from "../../components/Buton";
import Input from "../../components/Input";
import LeftNav from "../../components/LeftNav";

const CreateGroup: React.FC = () => {
  const [inviteCode, setInviteCode] = useState<any>("");
  // const buttonProps = {mt: 8}
  return (
    <>
      <Flex p={5} w="100%" h="100vh">
        <LeftNav />
        <Center
          flexDir={"column"}
          ml={3}
          bg="purple.200"
          rounded={5}
          w="100%"
          h="100%"
        >
          <VStack spacing={8}>
            <Heading size="md">Join your first group</Heading>
            <Input
              value={inviteCode}
              formLabel="Invite code"
              setState={setInviteCode}
              isRequired={true}
              w={150}
            />
            <Heading size="md">or</Heading>
            <DoinkButton w={150}>Create a new group</DoinkButton>
          </VStack>
        </Center>
      </Flex>
    </>
  );
};

export default CreateGroup;
