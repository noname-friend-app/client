import {
  useUpdateListText,
  useAddListItem,
  useUpdateListItemCompleted,
  useCreateList,
} from "./lists";

import { useCreateProfile, useSignup, useLogin, useLogout } from "./auth";

import { useJoinGroup, useCreateGroup } from "./groups";

import { useCreateQuote, useCreateComment } from "./quotes";

import { useEditProfile, useEditAccount } from "./user";

export {
  //Auth
  useCreateProfile,
  useSignup,
  useLogin,
  useLogout,

  //Groups
  useJoinGroup,
  useCreateGroup,

  //Lists
  useUpdateListText,
  useAddListItem,
  useUpdateListItemCompleted,
  useCreateList,

  //Quotes
  useCreateQuote,
  useCreateComment,

  //User
  useEditProfile,
  useEditAccount,
};
