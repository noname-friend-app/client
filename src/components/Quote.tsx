import { Flex, Heading, HStack, Text, Link, Divider } from "@chakra-ui/react";
import ProfilePicture from "./ProfilePicture";

// For Comments
import { Link as RouterLink } from "react-router-dom";
import { useComments } from "../libs/api";
import { useParams } from "react-router-dom";
import Comment from "./Comments";

interface Props {
  userId: string;
  name: string;
  text: string;
  saidAt: string;
}

const Quote: React.FC<Props> = ({
  userId,
  name,
  text,
  saidAt = "06/07/2022",
}) => {
  const date = `${new Date(saidAt).getMonth()}/${new Date(
    saidAt
  ).getDate()}/${new Date(saidAt).getFullYear()}`;

  // Comments Logic
  const { groupId } = useParams();
  const { quoteId } = useParams();
  const { data } = useComments({
    quoteId: quoteId!,
    groupId: groupId!,
  });

  return (
    <>
      <Flex
        rounded={10}
        bg="purple.300"
        border="1px solid #4A3754"
        w="100%"
        minH={120}
        h="auto"
        p={3}
        flexDir="column"
      >
        <HStack>
          <ProfilePicture seed={userId} size="sm" />

          <Heading size="sm">{name}</Heading>
        </HStack>
        <Text mt={4}>{text}</Text>
        <HStack color="gray.300" fontSize={"sm"}>
          <Text>Said: </Text>
          <Text>{date}</Text>
        </HStack>
      </Flex>
      {/* COMMENTS */}
      <Flex
        bg="yellow"
        w={"100%"}
        h={"auto"}
        flexDir={"column"}
      >
        {/* <Flex
          w={10}
          h={10}
          ml={5}
          mb={5}
          border="1px"
          borderTop={"none"}
          borderRight={"none"}
          borderBottomLeftRadius={"10"}
        /> */}

        {data && data.comments.length > 0 ? (
          data!.comments.map((comment, index) => (
            <Comment
              key={index}
              text={comment.text}
              // Ask clarification for ?
              commentName={comment.profile?.name}
              createdAt={comment.createdAt}
            />
          ))
        ) : (
          <></>
        )}

        <Flex
          // bg="blue.300"
          ml={20}
          fontSize={"13px"}
        >
          <Link as={RouterLink} color={"purple.100"} pr={2}>
            Reply
          </Link>
          <Divider orientation="vertical" pr={2} />
          <Link as={RouterLink} color={"purple.100"} pr={2}>
            Show More Comments
          </Link>
          <Divider orientation="vertical" pr={2} />
          <Link as={RouterLink} color={"purple.100"} pr={2}>
            View All Comments
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Quote;
