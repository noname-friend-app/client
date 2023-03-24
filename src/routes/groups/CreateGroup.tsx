import { Center, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CreateGroupModal from "../../components/groups/CreateGroupModal";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { useGroups } from "../../libs/api";

const CreateGroup: React.FC = () => {
  const { data, isLoading } = useGroups();

  const [inviteCode, setInviteCode] = useState<string>("");

  if (isLoading) return <Loading />;

  return (
    <>
      <Center
        flexDir={"column"}
        ml={{ base: 0, sm: 4 }}
        bg="purple.200"
        rounded={5}
        w="100%"
        h="100%"
      >
        <VStack spacing={8}>
          <Heading size="md">
            {data!.groups.length === 0 ? "Join your first group" : "Join group"}
          </Heading>
          <Input
            value={inviteCode}
            formLabel="Invite code"
            setState={setInviteCode}
            w={'100%'}
          />
          <Heading size="md">or</Heading>
          <CreateGroupModal />
        </VStack>
      </Center>
    </>
  );
};

export default CreateGroup;
