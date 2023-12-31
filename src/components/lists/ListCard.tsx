import {
  Divider,
  HStack,
  Icon,
  Text,
  Tooltip,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CheckSquare,
  ChevronDown,
  ChevronUp,
  Plus,
  Square,
} from "react-feather";
import { useAddListItem, useCompleteList } from "../../libs/api/mutations";
import { useListItems } from "../../libs/api/queries";
import ListItemCard from "./ListItemCard";
import Modal from "../Modal";
import Input from "../Input";
interface IProps {
  list: List;
}

const ListCard: React.FC<IProps> = ({
  list: { name, groupId, id, checked },
}: IProps) => {
  const [displayListItems, setDisplayListItems] = useState(false);
  const { data, isLoading } = useListItems({
    listId: id,
    groupId,
    enabled: displayListItems,
  });
  const [listItemName, setListItemName] = useState<string>("");
  const {
    isOpen: isNewListItemModalOpen,
    onOpen: openListItemModal,
    onClose: closeListItemModal,
  } = useDisclosure();

  const { mutate: addListItem, isPending: isAddingListItem } = useAddListItem({
    closeListItemModal,
    listId: id,
    groupId,
  });

  const { mutate: completeList } = useCompleteList({ groupId });

  const handleCreateListItemName = () => {
    addListItem({ text: listItemName, listId: id, groupId })
    setListItemName('')
  }
  return (
    <>
      <HStack w="100%">
        <HStack>
          <Icon
            w={6}
            h={6}
            onClick={() => setDisplayListItems(!displayListItems)}
            _hover={{ color: "purple.100", cursor: "pointer" }}
            as={displayListItems ? ChevronUp : ChevronDown}
          />
          <Icon
            w={6}
            h={6}
            onClick={() => completeList({ listId: id, checked: !checked })}
            _hover={{ cursor: "pointer", color: "purple.100" }}
            as={checked ? CheckSquare : Square}
          />
          <Text fontSize={'xl'} as={checked ? "s" : "p"}>{name}</Text>
        </HStack>
        <Tooltip label="Add new list item">
          <Icon
          w={6}
          h={6}
            onClick={() => openListItemModal()}
            color="white"
            _hover={{ color: "purple.100", cursor: "pointer" }}
            as={Plus}
          />
        </Tooltip>
      </HStack>
      <VStack pl={16} alignSelf={"start"} w="80%">
        {displayListItems ? (
          isLoading ? null : data && data.listItems.length > 0 ? (
            data.listItems
              .sort((a, b) => {
                return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
              })
              .map((listItem, index) => (
                <>
                  <ListItemCard
                    groupId={groupId}
                    index={index}
                    key={index}
                    listItem={listItem}
                  />
                  <Divider w='100%' />
                </>
              ))
          ) : (
            <Text>No list items</Text>
          )
        ) : null}
      </VStack>
      <Modal
        onClose={closeListItemModal}
        isOpen={isNewListItemModalOpen}
        title="New List Item"
        actionText="Add List Item"
        action={handleCreateListItemName}
        actionDisabled={listItemName.length === 0 || isAddingListItem}
      >
        <Input
          formLabel="List Item Name"
          value={listItemName}
          setState={setListItemName}
          isRequired
          w="100%"
        />
      </Modal>
    </>
  );
};

export default ListCard;
