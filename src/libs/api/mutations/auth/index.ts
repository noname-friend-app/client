import axios, { AxiosError } from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

const API_URL = process.env.REACT_APP_API_URL;

//AUTH mutations
interface CreateProfileProps {
  name: string;
  bio: string;
  pronouns: string;
  birthday: string;
}

const createProfile = (credentials: CreateProfileProps) => {
  return axios.post(`${API_URL}/profile`, credentials);
};

const useCreateProfile = () => {
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

const useSignup = () => {
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

const useLogin = () => {
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

const useLogout = () => {
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


export {
  useCreateProfile,
  useSignup,
  useLogin,
  useLogout
}