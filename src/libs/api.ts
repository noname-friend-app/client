import { Dispatch, SetStateAction } from "react";
import axios, { AxiosError } from "axios";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

//MUTATIONS

interface LoginProps {
  email?: string;
  username?: string;
  password: string;
}
const login = (credentials: LoginProps) => {
  return axios.post(`${API_URL}/login`, credentials).catch(() => {
    return null
  })
};

export const useLogin = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(["session"]);
      navigate("/");
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
      });
    },
  });
};

//QUERIES
// const fetchSession = (): Promise<Session> => {
//   return axios.get(`${API_URL}/check-session`);
// };

export const useSession = ({
  setUser,
}: {
  setUser: Dispatch<SetStateAction<any>>;
}) => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      await axios.get(`${API_URL}/check-session`).then((res) => {
        if (res.status === 200 || res.status === 304) {
          setUser(res.data);
          navigate("/");
        } else {
          setUser(null)
        }
      }).catch(() => {
        setUser(null)
      })
      return null
    },
    onError: () => {
      setUser(null);
    },
  });
};

export const useCheckSession = () => {};
