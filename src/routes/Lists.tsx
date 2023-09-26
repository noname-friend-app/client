import { Flex, HStack, Heading, VStack, useDisclosure } from "@chakra-ui/react";
import GroupNav from "../components/groups/Nav";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Input from "../components/Input";
import { useState } from "react";
import { useCreateList, useLists } from "../libs/api";
import { useParams } from "react-router-dom";
import ListCard from "../components/ListCard";

const Lists: React.FC = () => {
  const [listName, setListName] = useState<string>("");
  const { groupId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {data, isLoading: isLoadingLists} = useLists({groupId: groupId!})
  const { mutate: createList, isLoading: isCreatingList } = useCreateList({
    onClose,
  });

  if (isLoadingLists) return <div>Loading...</div>;
  const lists = data!.lists
  return (
    <>
      <Flex
        pb={200}
        px={{ base: 0, sm: 4 }}
        mt={4}
        flexDir={"column"}
        w="100%"
        h="100%"
      >
        <GroupNav />
        <HStack mt={4}>
          <Heading alignSelf={"center"}>Lists</Heading>
          <Button onClick={onOpen} h={10} w={24}>
            New List
          </Button>
        </HStack>
        <VStack mt={4} spacing={8}>
        {!isLoadingLists && lists && lists.length > 0 ? (
          lists.map((list, index) => (
            <ListCard key={index} list={list} />
          ))
        ) : (
          <Heading size="md" mt={4}>
            No lists yet
          </Heading>
        )}
        </VStack>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title="New List"
          action={() => createList({ name: listName, groupId: groupId! })}
          actionText="Create List"
          actionDisabled={listName.length === 0 || isCreatingList}
        >
          <Input
            formLabel="List Name"
            value={listName}
            setState={setListName}
            isRequired
            w="100%"
          />
        </Modal>
      </Flex>
    </>
  );
};

export default Lists;
