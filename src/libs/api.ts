import axios, { AxiosError } from "axios";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const API_URL = process.env.REACT_APP_API_URL

//MUTATIONS
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
      queryClient.invalidateQueries(["quotes"]);
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
      queryClient.invalidateQueries(["groups"]);
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
      queryClient.invalidateQueries(["groups"]);
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
interface ProfileProps {
  name: string;
  bio: string;
  pronouns: string;
  birthday: string;
}

const profile = (credentials: ProfileProps) => {
  return axios.post(`${API_URL}/profile`, credentials);
};

export const useProfile = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: profile,
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
      queryClient.invalidateQueries(["session"]);
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
      queryClient.invalidateQueries(["session"]);
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
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(["session"]);
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
      queryClient.invalidateQueries(["session"]);
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
      queryClient.invalidateQueries(["session"]);
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

//QUERIES --------------------------------------------

export const getSession = async () => {
  try {
    const res = await axios.get(`${API_URL}/check-session`);
    if (res.status === 200 || res.status === 304) {
      return res.data;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

const getGroups = async () => {
  const res = await axios.get(`${API_URL}/groups/joined`);
  return res.data;
};

export const useGroups = () => {
  const toast = useToast();
  return useQuery<GroupsResponse>({
    queryKey: ["groups"],
    queryFn: getGroups,
    onError: () => {
      toast({
        title: "Error",
        description: "An error has occurred while trying to get groups",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });
};

interface GroupProps {
  id: string;
}

const getGroup = async ({ id }: GroupProps) => {
  try {
    const res = await axios.get(`${API_URL}/groups/${id}`);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const useGroup = ({ id }: GroupProps) => {
  const toast = useToast();
  return useQuery<GroupResponse>({
    queryKey: ["group", id],
    queryFn: () => getGroup({ id }),
    onError: () => {
      toast({
        title: "Error",
        description: "An error has occurred while trying to get group",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });
};

interface GroupQuote {
  groupId: string;
}

const getGroupQuotes = async ({ groupId }: GroupQuote) => {
  try {
    const res = await axios.get(`${API_URL}/group/${groupId}/quotes`);
    if (res.data.quotes.length === 0) {
      return null;
    }
    return res.data;
  } catch (e) {
    return null;
  }
};

export const useGroupQuotes = ({ groupId }: GroupQuote) => {
  const toast = useToast();
  return useQuery<QuotesResponse>({
    queryKey: ["quotes", groupId],
    queryFn: () => getGroupQuotes({ groupId }),
    onError: () => {
      toast({
        title: "Error",
        description: "An error has occurred while trying to get group",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });
};