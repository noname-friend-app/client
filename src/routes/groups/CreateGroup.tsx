import { Center, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../components/Button";
import CreateGroupModal from "../../components/groups/CreateGroupModal";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { useGroups, useJoinGroup } from "../../libs/api";

const CreateGroup: React.FC = () => {
  const { data, isLoading } = useGroups();
  const { mutate, isPending: isJoining } = useJoinGroup();
  const [inviteCode, setInviteCode] = useState<string>("");

  if (isLoading) {
    return (
      <Center w="100%" h="100vh">
        <Loading />
      </Center>
    );
  }

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
          <form>
            <VStack>
              <Input
                value={inviteCode}
                formLabel="Invite code"
                setState={setInviteCode}
                w={"100%"}
                length={6}
              />
              <Button
                onClick={() => mutate({ joinCode: inviteCode })}
                isDisabled={inviteCode.length !== 6 || isJoining}
              >
                Join
              </Button>
            </VStack>
          </form>
          <Heading size="md">or</Heading>
          <CreateGroupModal />
        </VStack>
      </Center>
    </>
  );
};

export default CreateGroup;
