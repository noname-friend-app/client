import { Link as RouterLink } from "react-router-dom";
import { useComments } from "../../libs/api";
import { useParams } from "react-router-dom";
import Comments from ".././comments/Comments";
import { Flex, Link, Divider } from "@chakra-ui/react";

const Comment = () => {
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
        w={"90%"}
        h={"auto"}
        flexDir={"column"}
        ml={5}
      >
        

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
          <Comments
              text={"Test"}
              // Ask clarification for ?
              commentName={"Alex"}
              createdAt={'10/12/1312'}
            />

        <Flex
          ml={5}
          fontSize={"13px"}
        >
          <Link as={RouterLink} color={"purple.100"}  pr={2}>
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
export default Comment;
