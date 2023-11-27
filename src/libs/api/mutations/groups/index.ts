import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

axios.defaults.withCredentials = true;

const API_URL = process.env.REACT_APP_API_URL;

//GROUPS MUTATIONS
interface JoinGroupProps {
  joinCode: string;
}

const joinGroup = async (joinCode: JoinGroupProps) => {
  try {
    const res = await axios.post(`${API_URL}/groups/join`, joinCode);
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occurred");
  }
};

const useJoinGroup = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: joinGroup,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      toast({
        title: "Success",
        description: "Joined group",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
      window.location.href = `/groups/${data.group.id}`;
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

interface CreateGroupProps {
  name: string;
  description: string;
}

const createGroup = async (groupDetails: CreateGroupProps) => {
  try {
    const res = await axios.post(`${API_URL}/groups/new`, groupDetails);
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occurred");
  }
};

const useCreateGroup = ({ onClose }: { onClose: () => void }) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createGroup,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["groups"] });
      toast({
        title: "Success",
        description: "Group created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
      onClose();
      window.location.href = `/groups/${data.group.id}`;
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
  useJoinGroup,
  useCreateGroup
}