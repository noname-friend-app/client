import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

axios.defaults.withCredentials = true;

const API_URL = process.env.REACT_APP_API_URL;

//QUOTES MUTATIONS
interface CreateQuoteProps {
  text: string;
  saidAt: string;
  groupId: string;
}

const createQuote = async (quoteDetails: CreateQuoteProps) => {
  try {
    const res = await axios.post(
      `${API_URL}/group/${quoteDetails.groupId}/quotes`,
      quoteDetails
    );
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occurred");
  }
};

const useCreateQuote = ({ onClose }: { onClose: () => void }) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createQuote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
      toast({
        title: "Success",
        description: "Quote created",
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

interface CreateCommentProps {
  text: string;
  createdAt: string;
  quoteId: Quote["id"];
  groupId: Group["id"];
}

const createComment = async (commentDetails: CreateCommentProps) => {
  try {
    const res = await axios.post(
      `${API_URL}/group/${commentDetails.groupId}/quotes/${commentDetails.quoteId}/comments`,
      commentDetails
    );
    return res.data;
  } catch (e: any) {
    throw new Error(e.response?.data.message || "An error has occured");
  }
};

const useCreateComment = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      toast({
        title: "Success",
        description: "Comment created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
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

export {
  useCreateQuote,
  useCreateComment,
}