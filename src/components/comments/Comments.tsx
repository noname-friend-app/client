import { Link as RouterLink } from "react-router-dom";
import { useComments } from "../../libs/api/queries";
import { useCreateComment } from "../../libs/api/mutations";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

interface Props {
  id: string;
}

const Comments: React.FC<Props> = ({ id }: Props) => {
  // Comments Logic
  const [displayComments, setDisplayComments] = useState<boolean>(true);
  const [displayTextBox, setDisplayTextBox] = useState<boolean>(false);
  const { groupId } = useParams();
  //const quoteid from quote data

  const { data } = useComments({
    quoteId: id,
    groupId: groupId!,
  });
  const [text, setText] = useState<string>("");
  const [createdAt] = useState<string>("");

  const { mutate } = useCreateComment();
  return (
    <>
      {data && data.comments && (
        <Flex
          display={displayComments ? "block" : "none"}
          w={10}
          h={10}
          ml={5}
          mb={5}
          border="1px"
          borderTop={"none"}
          borderRight={"none"}
          borderBottomLeftRadius={"10"}
        />
      )}
      <Flex w={"90%"} h={"auto"} flexDir={"column"} ml={5}>
        {displayComments && data && data.comments.length > 0 ? (
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

        <Flex display={displayTextBox ? "flex" : "none"} flexDir={"row"} ml={5}>
          <Input
            formLabel="Add your comment here"
            value={text}
            setState={setText}
            w={"100%"}
          />

          <Button
            w={"60px"}
            h={"40px"}
            onClick={() =>
              mutate({
                text: text,
                createdAt,
                groupId: groupId!,
                quoteId: id,
              })
            }
          >
            Reply
          </Button>
        </Flex>
        <Flex mb={5} ml={5} fontSize={"13px"} mt={2}>
          <Link
            _hover={{ textDecorationLine: "none", color: "white" }}
            onClick={() => setDisplayTextBox(true)}
            as={RouterLink}
            color={"purple.100"}
            pr={2}
          >
            Add Comment
          </Link>
          <Text
            display={data && data.comments.length > 0 ? "block" : "none"}
            onClick={() => setDisplayComments(!displayComments)}
            color={"purple.100"}
            _hover={{ color: "white", cursor: "pointer" }}
          >
            {displayComments ? "Hide Comments" : "Show Comments"}
          </Text>
          {/* <Divider orientation="vertical" pr={2} /> */}
          {/* <Link as={RouterLink} color={"purple.100"} pr={2}>
            Show More Comments
          </Link>
          <Divider orientation="vertical" pr={2} />
          <Link as={RouterLink} color={"purple.100"} pr={2}>
            View All Comments
          </Link> */}
        </Flex>
      </Flex>
    </>
  );
};
export default Comments;
