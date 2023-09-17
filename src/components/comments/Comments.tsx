import { Link as RouterLink } from "react-router-dom";
import { useComments } from "../../libs/api";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { Flex, Link, Divider, Textarea, Input } from "@chakra-ui/react";
import { useState } from "react";
import Button from "../Button";

const Comments = () => {
  // Comments Logic
  const [displayTextBox, setDisplayTextBox] = useState<boolean>(false);
  const { groupId } = useParams();
  const { quoteId } = useParams();
  const { data } = useComments({
    quoteId: quoteId!,
    groupId: groupId!,
  });

  return (
    <>
      <Flex w={"90%"} h={"auto"} flexDir={"column"} ml={5}>
        {/* {data && data.comments.length > 0 ? (
          data!.comments.map((comment, index) => (
            <Comments
              key={index}
              text={comment.text}
              // Ask clarification for ?
              commentName={comment.profile?.name}
              createdAt={comment.createdAt}
            />
          ))
        ) : (
          <></>
        )} */}
        <Comment
          text={"Bro who tf would say that?! XD"}
          // Ask clarification for ?
          commentName={"Alex"}
          createdAt={"10/12/1312"}
        />
        <Flex
          display={displayTextBox ? "flex" : "none"}
          flexDir={"row"}
          ml={5}
        >
          <Input variant={'flushed'} mb={2} placeholder="Add your comment here"/>

          <Button w={"60px"} h={"40px"} >
            Reply
          </Button>
          
        </Flex>
        <Flex ml={5} fontSize={"13px"} mt={2}>
          <Link
            onClick={() => setDisplayTextBox(true)}
            as={RouterLink}
            color={"purple.100"}
            pr={2}
          >
            Add Comment
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
export default Comments;
