import {
  Divider,
  HStack,
  Icon,
  Text,
  Tooltip,
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

  const {mutate: completeList} = useCompleteList({groupId})

  return (
    <>
      <HStack w="100%">
        <HStack>
          <Divider h="100%" orientation="vertical" />
          <Icon
            onClick={() => setDisplayListItems(!displayListItems)}
            _hover={{ color: "purple.100", cursor: "pointer" }}
            as={displayListItems ? ChevronUp : ChevronDown}
          />
          <Icon onClick={() => completeList({listId: id, checked: !checked})} _hover={{cursor: 'pointer', color: 'purple.100'}} as={checked ? CheckSquare : Square} />
          <Text as={checked ? 's' : 'p'}>{name}</Text>
        </HStack>
        <Tooltip label="Add new list item">
          <Icon
            onClick={() => openListItemModal()}
            color="white"
            _hover={{ color: "purple.100", cursor: "pointer" }}
            as={Plus}
          />
        </Tooltip>
      </HStack>
      {displayListItems ? (
        isLoading ? null : data && data.listItems.length > 0 ? (
          data.listItems
            .sort((a, b) => {
              return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
            })
            .map((listItem, index) => (
              <ListItemCard
                groupId={groupId}
                index={index}
                key={index}
                listItem={listItem}
              />
            ))
        ) : (
          <Text>No list items</Text>
        )
      ) : null}
      <Modal
        onClose={closeListItemModal}
        isOpen={isNewListItemModalOpen}
        title="New List Item"
        actionText="Add List Item"
        action={() => addListItem({ text: listItemName, listId: id, groupId })}
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
