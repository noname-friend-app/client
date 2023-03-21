import { Flex, Center, Heading, VStack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Button from "../../components/Buton";
import Input from "../../components/Input";
import LeftNav from "../../components/LeftNav";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import { useCreateGroup, useGroups } from "../../libs/api";

const CreateGroup: React.FC = () => {
  const {mutate, isLoading: isLoadingCreatedGroup} = useCreateGroup()
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data, isLoading } = useGroups();

  const [inviteCode, setInviteCode] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  const handleSubmit = () => {
    if (name.length > 1 && description.length > 1) {
      mutate({name, description})
    }
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Flex p={5} w="100%" h="100vh">
        <LeftNav profileOnly={data.groups.length === 0 ? true : false} />
        <Center
          flexDir={"column"}
          ml={3}
          bg="purple.200"
          rounded={5}
          w="100%"
          h="100%"
        >
          <VStack spacing={8}>
            <Heading size="md">
              {data.groups.length === 0
                ? "Join your first group"
                : "Join group"}
            </Heading>
            <Input
              value={inviteCode}
              formLabel="Invite code"
              setState={setInviteCode}
              w={150}
            />
            <Heading size="md">or</Heading>
            <Button _hover={{color: 'purple.100'}} color='white' bg='none' onClick={onOpen} w={150}>
              Create a new group
            </Button>
          </VStack>
        </Center>
      </Flex>
      <Modal
        title="Create a new group"
        isOpen={isOpen}
        onClose={onClose}
        actionText="Create group"
        action={handleSubmit}
        actionDisabled={isLoadingCreatedGroup || name.length < 1 || description.length < 1}
      >
        <VStack spacing={8} w="100%">
          <Input
            w={400}
            formLabel="Group name"
            value={name}
            setState={setName}
            isRequired={true}
          />
          <Input
            w={400}
            formLabel="Group description"
            value={description}
            setState={setDescription}
            isRequired={true}
          />
        </VStack>
      </Modal>
    </>
  );
};

export default CreateGroup;
