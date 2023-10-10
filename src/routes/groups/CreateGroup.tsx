import {  Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../components/Button";
import CreateGroupModal from "../../components/groups/CreateGroupModal";
import Input from "../../components/Input";
import { useJoinGroup } from "../../libs/api/mutations";
import { useGroups } from "../../libs/api/queries";
import CreateGroupLayout from "../../layouts/grid/CreateGroup";

const CreateGroup: React.FC = () => {
  const { data } = useGroups();
  const { mutate, isPending: isJoining } = useJoinGroup();
  const [inviteCode, setInviteCode] = useState<string>("");

  return (
    <>
      <CreateGroupLayout>
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
      </CreateGroupLayout>
    </>
  );
};

export default CreateGroup;
