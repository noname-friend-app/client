import {
  Divider,
  Flex,
  HStack,
  Heading,
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
  useDeleteListItem,
  useUpdateListItemCompleted,
  useUpdateListText,
} from "../../libs/api/mutations";
import EditListModal from "./EditListModal";
import { useState } from "react";
import Modal from "../Modal";

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
  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteMdoal,
    onClose: closeDeleteModal
  } = useDisclosure();
  const [listItemText, setListItemText] = useState<string>(text);

  const { mutate: updateListItemText } = useUpdateListText({
    listId,
    closeEditListModal: closeEditModal,
  });
  const {mutate: deleteListItem} = useDeleteListItem({
    listId,
    closeDeleteListItemModal: closeDeleteModal
  })
  const handleEditListItemText = () => {
    if (text !== listItemText)
      updateListItemText({ listId, text: listItemText, groupId, itemId: id });
  };

  const handleDeleteListItem = () => {
    deleteListItem({
      listId,
      groupId,
      itemId: id,
    })
  }
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
                <MenuItem onClick={openDeleteMdoal}>Delete</MenuItem>
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
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        title="Are you sure?"
        action={handleDeleteListItem}
        actionText="DELETE"
        actionButtonStyles={{backgroundColor: 'red.500'}}
        actionButtonHoverStyles={{backgroundColor: 'red.600'}}
        actionTextStyles={{color: 'white'}}
      >
        <Heading size='sm'>This action can't be reversed!</Heading>
      </Modal>
    </>
  );
};

export default ListItemCard;
