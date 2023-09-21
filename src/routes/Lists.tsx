import {  Flex, HStack, Heading, Input } from "@chakra-ui/react";
import GroupNav from "../components/groups/Nav";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";

const Lists: React.FC = () => {
  const [listName, setListName] = useState<string>("");
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
          <Button h={10} w={24}>
            New List
          </Button>
        </HStack>
        <Modal
        isOpen={false}
        onClose={() => null}
        title="New List"
        action={() => null}
        actionText="Create List"
        // actionDisabled={
        //   quote.length === 0 || saidAt.length === 0 || isCreatingQuote
        // }
      >

      </Modal>
        <Input
          placeholder="Quote"
          value={listName}
          onChange={(e) => setListName(e.target.value)} />
      </Flex>
    </>
  );
};

export default Lists;
