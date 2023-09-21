import { Link as RouterLink } from "react-router-dom";
import { useComments, useCreateComment } from "../../libs/api";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import { Flex, Link, Divider } from "@chakra-ui/react";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

interface Props {
  id: string;
}

const Comments: React.FC<Props> = ({ id }: Props) => {
  // Comments Logic
  const [displayTextBox, setDisplayTextBox] = useState<boolean>(false);
  const { groupId } = useParams();
  //const quoteid from quote data 

  const { data } = useComments({
    quoteId: id,
    groupId: groupId!,
  });

  // console.log(quoteId);
  // console.log(groupId);
  // console.log(id);

  const [text, setText] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<string>("");

  const { mutate } = useCreateComment();
  // console.log(id);

  // console.log(data)
  return (
    <>
      {data && data.comments && (
         <Flex
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
        {/* <Comment
          text={"Bro who tf would say that?! XD"}
          // Ask clarification for ?
          commentName={"Alex"}
          createdAt={"10/12/1312"}
        /> */}
        <Flex display={displayTextBox ? "flex" : "none"} flexDir={"row"} ml={5}>
          <Input
            // mb={2}
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