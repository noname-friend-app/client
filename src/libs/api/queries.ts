import axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";

axios.defaults.withCredentials = true;

export const API_URL = process.env.REACT_APP_API_URL;

//QUERIES --------------------------------------------

const getSession = async () => {
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

export const useSession = () => {
  return useSuspenseQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
};

const getGroups = async () => {
  const res = await axios.get(`${API_URL}/groups/joined`);
  return res.data;
};

export const useGroups = () => {
  return useSuspenseQuery<GroupsResponse>({
    queryKey: ["groups"],
    queryFn: getGroups,
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
  return useSuspenseQuery<GroupResponse>({
    queryKey: ["group", id],
    queryFn: () => getGroup({ id }),
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
  return useSuspenseQuery<QuotesResponse>({
    queryKey: ["quotes", groupId],
    queryFn: () => getGroupQuotes({ groupId }),
  });
};
