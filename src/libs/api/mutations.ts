import axios, { AxiosError } from "axios";
import { useQueryClient, useMutation, } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const API_URL = process.env.REACT_APP_API_URL;

//MUTATIONS
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

export const useAddListItem = ({
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

export const useUpdateListItemCompleted = ({ listId }: { listId: string }) => {
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

export const useCreateList = ({ onClose }: { onClose: () => void }) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createList,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["lists"]});
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

export const useCreateQuote = ({ onClose }: { onClose: () => void }) => {
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
    return res.data
  } catch (e: any) {
    throw new Error(e.response?.data.message || 'An error has occured')
  }
};

export const useCreateComment = () => {
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

export const useJoinGroup = () => {
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

export const useCreateGroup = ({ onClose }: { onClose: () => void }) => {
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

// CREATE PROFILE --------------------------------------------
interface CreateProfileProps {
  name: string;
  bio: string;
  pronouns: string;
  birthday: string;
}

const createProfile = (credentials: CreateProfileProps) => {
  return axios.post(`${API_URL}/profile`, credentials);
};

export const useCreateProfile = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: createProfile,
    onSuccess: () => {
      window.location.href = "/";
      toast({
        title: "Success",
        description: "Profile Created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
    onError: (
      error: AxiosError<{
        message: string;
      }>
    ) => {
      toast({
        title: "Error",
        description: error?.response?.data.message || "An error has occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

// SIGNUP --------------------------------------------
interface SignupProps {
  email: string;
  username: string;
  password: string;
}

const signup = (credentials: SignupProps) => {
  return axios.post(`${API_URL}/signup`, credentials);
};

export const useSignup = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      window.location.href = "/";
      toast({
        title: "Success",
        description: "Account created",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
    onError: (
      error: AxiosError<{
        message: string;
      }>
    ) => {
      toast({
        title: "Error",
        description: error?.response?.data.message || "An error has occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

// LOGIN --------------------------------------------
interface LoginProps {
  email?: string;
  username?: string;
  password: string;
}

const login = (credentials: LoginProps) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const useLogin = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      window.location.href = "/";
    },
    onError: (
      error: AxiosError<{
        message: string;
      }>
    ) => {
      toast({
        title: "Error",
        description: error?.response?.data.message || "An error has occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

// LOGOUT --------------------------------------------

const logout = () => {
  return axios.get(`${API_URL}/logout`);
};

export const useLogout = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      navigate("/login");
      toast({
        title: "Success",
        description: "You have been logged out",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "An error has occurred while trying to log out",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

// EDIT SETTINGS --------------------------------------------

interface editProfileProps {
  name: string;
  pronouns: string;
  bio: string;
  birthday: string;
}

const editProfile = (credentials: editProfileProps) => {
  return axios.put(`${API_URL}/profile`, credentials);
};

export const useEditProfile = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      toast({
        title: "Success",
        description: "Profile Updated",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "An error has occurred updating your profile",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};

interface editAccountProps {
  username: string;
  email: string;
  password: string;
}

const editAccount = (credentials: editAccountProps) => {
  return axios.put(`${API_URL}/profile`, credentials);
};

export const useEditAccount = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
      toast({
        title: "Success",
        description: "Account Updated",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "An error has occurred while trying to log out",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    },
  });
};
