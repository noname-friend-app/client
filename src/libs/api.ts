import { Dispatch, SetStateAction } from "react";
import axios, { AxiosError } from "axios";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

//MUTATIONS
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
  const queryClient = useQueryClient()
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
  const navigate = useNavigate();
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

//QUERIES
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

// export const useSession = ({
//   setUser,
// }: {
//   setUser: Dispatch<SetStateAction<any>>;
// }) => {
//   const navigate = useNavigate();
//   return useQuery({
//     queryKey: ["session"],
//     queryFn: async () => {
//       let res = await axios.get(`${API_URL}/check-session`);
//       return res.data
//       // await axios
//       //   .get(`${API_URL}/check-session`)
//       //   .then((res) => {
//       //     if (res.status === 200 || res.status === 304) {
//       //       setUser(res.data);
//       //       navigate("/");
//       //     } else {
//       //       console.log('no user api')
//       //       setUser(null);
//       //     }
//       //   })
//       //   .catch(() => {
//       //     console.log('error')
//       //     setUser(null);
//       //   });
//       // return null;
//     },
//     onError: () => {
//       setUser(null);
//     },
//   });
// };

interface User {
  name: string;
  bio: string;
  pronouns: string;
  birthday: string;
}

export const useProfile = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      window.location.href = "/";
      navigate("/");
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

interface UserProps {
  name: string;
  bio: string;
  pronouns: string;
  birthday: string;
}

const profile = (credentials: UserProps) => {
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
