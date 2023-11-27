import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

axios.defaults.withCredentials = true;

const API_URL = process.env.REACT_APP_API_URL;

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

const useEditProfile = () => {
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

const useEditAccount = () => {
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

export {
  useEditProfile,
  useEditAccount
}