import {
  Avatar,
  Flex,
  Heading,
  Text,
  VStack,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LogIn } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import { useGroups, useJoinGroup } from "../../libs/api";
import { useWindowDimensions } from "../../libs/dimensions";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import CreateGroupModal from "./CreateGroupModal";
import GroupsLayout from "../../layouts/grid/Groups";

const GroupsBanner: React.FC = () => {
  const { data, isLoading } = useGroups();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();
  const [inviteCode, setInviteCode] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { mutate, isLoading: isJoiningGroup, isError } = useJoinGroup();

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        if (data.groups) {
          if (data.groups.length === 0 && pathname !== "/create-group") {
            navigate("/groups/new");
          }
        }
      }
    }
  }, [data, isLoading, navigate, pathname]);

  return (
    <>
      <GroupsLayout
        width={width}
        display={
          !isLoading ? (data!.groups.length === 0 ? "flex" : "flex") : "flex"
        }
      >
        <Flex flexDir="column">
          <Heading display={{ base: "none", md: "flex" }} alignSelf={"center"}>
            Groups
          </Heading>
          <Flex flexDir="column">
            {data!.groups.map((group, index: number) => (
              <Flex
                mt={4}
                onClick={() => navigate(`/groups/${group.id}`)}
                alignSelf={{ base: "center", md: "start" }}
                key={index}
                _hover={{ cursor: "pointer" }}
              >
                <Avatar rounded={5} name={group.name} size="sm" />
                <Text
                  display={{ base: "none", md: "flex" }}
                  ml={3}
                  size="sm"
                  alignSelf={"center"}
                  fontWeight={
                    pathname.includes(`/groups/${group.id}`) ? "bold" : "normal"
                  }
                  _hover={{ color: "purple.100", cursor: "pointer" }}
                  color={
                    pathname.includes(`/groups/${group.id}`)
                      ? "purple.100"
                      : "white"
                  }
                >
                  {group.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <VStack spacing={3}>
          <Button
            onClick={onOpen}
            h={width > 569 ? 45 : 8}
            w={width > 569 ? "100%" : 8}
          >
            {width > 767 ? (
              <Text>Join Group</Text>
            ) : (
              <Icon w={5} h={5} as={LogIn} />
            )}
          </Button>
          <CreateGroupModal />
        </VStack>
      </GroupsLayout>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Join Group"
        actionText="Join Group"
        action={() => mutate({ joinCode: inviteCode })}
        actionDisabled={inviteCode.length === 0 || isJoiningGroup}
      >
        <Input
          value={inviteCode}
          formLabel="Invite code"
          setState={setInviteCode}
          w={"100%"}
          // length={6}
        />
      </Modal>
    </>
  );
};

export default GroupsBanner;
