import {
  Divider,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckSquare, Square, MoreVertical, X } from "react-feather";
import {
  useUpdateListItemCompleted,
  useUpdateListText,
} from "../../libs/api/mutations";
import EditListModal from "./EditListModal";
import { useState } from "react";

interface IProps {
  listItem: ListItem;
  index: number;
  groupId: string;
}

const ListItemCard: React.FC<IProps> = ({
  listItem: { id, text, checked, listId },
  groupId,
}: IProps) => {
  const { mutate } = useUpdateListItemCompleted({ listId });
  const {
    isOpen: isEditModalOpen,
    onOpen: openEditModal,
    onClose: closeEditModal,
  } = useDisclosure();
  const [listItemText, setListItemText] = useState<string>(text);

  const { mutate: updateListItemText } = useUpdateListText({
    listId,
    closeEditListModal: closeEditModal,
  });

  const handleEditListItemText = () => {
    if (text !== listItemText)
      updateListItemText({ listId, text: listItemText, groupId, itemId: id });
  };
  return (
    <>
      <Flex pl={20} pr={4} w="100%" justifyContent={"space-between"}>
        <HStack
          onClick={() => mutate({ checked: !checked, listId, itemId: id })}
          _hover={{ color: "purple.100", cursor: "pointer" }}
        >
          <Icon as={checked ? CheckSquare : Square} />
          <Divider orientation="vertical" />
          <Text>{text}</Text>
        </HStack>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton>
                <Icon as={isOpen ? X : MoreVertical} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={openEditModal}>Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
      <EditListModal
        onClose={closeEditModal}
        isOpen={isEditModalOpen}
        text={listItemText}
        onChangeText={setListItemText}
        onSubmit={handleEditListItemText}
      />
    </>
  );
};

export default ListItemCard;
