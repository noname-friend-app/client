import { Divider, HStack, Icon, Text } from "@chakra-ui/react";
import { CheckSquare, Square } from "react-feather";
import { useUpdateListItemCompleted } from "../libs/api";

interface IProps {
  listItem: ListItem;
  index: number;
}

const ListItemCard: React.FC<IProps> = ({
  listItem: { id, text, checked, listId },
}: IProps) => {
  const { mutate } = useUpdateListItemCompleted({ listId });

  return (
    <HStack
      // mt={index !== 0 ? 0 : 0}
      onClick={() => mutate({ checked: !checked, listId, itemId: id })}
      _hover={{ color: "purple.100", cursor: "pointer" }}
      ml={20}
      w="100%"
    >
      <Icon as={checked ? CheckSquare : Square} />
      <Divider orientation="vertical" />
      <Text>{text}</Text>
      
    </HStack>
  );
};

export default ListItemCard;
