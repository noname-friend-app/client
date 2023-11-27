import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

axios.defaults.withCredentials = true;

const API_URL = process.env.REACT_APP_API_URL;

//LIST MUTATIONS
interface UpdateListTextProps {
  text: string;
  groupId: string;
  listId: string;
  itemId: string;
}

const updateListText = async (updateListTextDetails: UpdateListTextProps) => {
  try {
    const res = await axios.put(
      `${API_URL}/group/${updateListTextDetails.groupId}/list/${updateListTextDetails.listId}/item/${updateListTextDetails.itemId}`, updateListTextDetails
    );
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occurred");
  }
};

const useUpdateListText = ({
  listId,
  closeEditListModal,
}: {
  listId: string;
  closeEditListModal: () => void;
}) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateListText,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query: any) =>
          query.queryKey[0] === "listItems" &&
          query.queryKey[1]?.listId === listId,
      });
      toast({
        title: "Success",
        description: "Text updated",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
      closeEditListModal();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

interface CreateListItemProps {
  text: string;
  listId: string;
  groupId: string;
}

const addListItem = async (listItemDetails: CreateListItemProps) => {
  try {
    const res = await axios.post(
      `${API_URL}/group/${listItemDetails.groupId}/list/${listItemDetails.listId}/item`,
      listItemDetails
    );
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occurred");
  }
};

const useAddListItem = ({
  listId,
  closeListItemModal,
  groupId,
}: {
  groupId: string;
  listId: string;
  closeListItemModal: () => void;
}) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addListItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query: any) =>
          query.queryKey[0] === "listItems" &&
          query.queryKey[1]?.listId === listId,
      });
      toast({
        title: "Success",
        description: "Item created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
      closeListItemModal();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

interface UpdateListItemCompletedProps {
  listId: string;
  itemId: string;
  checked: boolean;
}

const updateListItemCompleted = async (
  listItemDetails: UpdateListItemCompletedProps
) => {
  try {
    const res = await axios.put(
      `${API_URL}/list/${listItemDetails.listId}/item/${listItemDetails.itemId}/complete`,
      listItemDetails
    );
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occurred");
  }
};

const useUpdateListItemCompleted = ({ listId }: { listId: string }) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateListItemCompleted,
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query: any) =>
          query.queryKey[0] === "listItems" &&
          query.queryKey[1]?.listId === listId,
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

interface CreateListProps {
  name: string;
  groupId: string;
}

const createList = async (listDetails: CreateListProps) => {
  try {
    const res = await axios.post(
      `${API_URL}/group/${listDetails.groupId}/list`,
      listDetails
    );
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occurred");
  }
};

const useCreateList = ({ onClose }: { onClose: () => void }) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
      toast({
        title: "Success",
        description: "List created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
      onClose();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

export {
  useUpdateListText,
  useAddListItem,
  useUpdateListItemCompleted,
  useCreateList
}