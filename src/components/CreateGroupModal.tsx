import { useDisclosure, VStack } from "@chakra-ui/react";
import { useCreateGroup } from "../libs/api";
import Button from "./Buton";
import Modal from "./Modal";
import Input from "./Input";
import { useState } from "react";

interface Props {
  btnGhost?: boolean;
}

const CreateGroupModal: React.FC<Props> = ({ btnGhost }) => {
  const { mutate, isLoading: isLoadingCreatedGroup } = useCreateGroup();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    if (name.length > 1 && description.length > 1) {
      mutate({ name, description });
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        w={150}
      >
        Create group
      </Button>
      <Modal
        title="Create a new group"
        isOpen={isOpen}
        onClose={onClose}
        actionText="Create group"
        action={handleSubmit}
        actionDisabled={
          isLoadingCreatedGroup || name.length < 1 || description.length < 1
        }
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

export default CreateGroupModal;
