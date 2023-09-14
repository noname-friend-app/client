import {
  Center,
  Heading,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import Quote from "../components/Quote";
import { useCreateQuote } from "../libs/api/mutations";
import { useGroupQuotes } from "../libs/api/queries";
import SocialLayout from "../layouts/Social";

const Social = () => {
  const { groupId } = useParams();
  const btnProps = { alignSelf: "center" };
  const [quote, setQuote] = useState<string>("");
  const [saidAt, setSaidAt] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isPending: isCreatingQuote } = useCreateQuote({ onClose });
  const { data } = useGroupQuotes({ groupId: groupId! });

  return (
    <>
      <SocialLayout>
        <HStack mt={4}>
          <Heading alignSelf={"center"}>Social</Heading>
          <Button onClick={onOpen} {...btnProps} h={10} w={24}>
            New Quote
          </Button>
        </HStack>
        <VStack mt={4} spacing={4}>
          {data && data.quotes.length > 0 ? (
            data!.quotes.map((quote, index) => (
              <Quote
               
                key={index}
               
                userId={quote.profile.user!.id}
               
                name={quote.profile.name}
               
                text={quote.text}
               
                saidAt={quote.saidAt}
                id={quote.id}
             
              />
            ))
          ) : (
            <Center w="100%" h="100%">
              <Heading size="md">No quotes yet</Heading>
            </Center>
          )}
        </VStack>
      </SocialLayout>
      <Modal
        isOpen={isOpen}
        onClose={onClose} 
        title="New Quote"
        action={() => mutate({ text: quote, saidAt, groupId: groupId! })}
        actionText="Add Quote"
        actionDisabled={
          quote.length === 0 || saidAt.length === 0 || isCreatingQuote
        }
      >
        <VStack spacing={8}>
          <Input
            formLabel="Quote"
            value={quote}
            setState={setQuote}
            isRequired
            w="100%"
          />
          <Input
            formLabel="Said At"
            value={saidAt}
            setState={setSaidAt}
            isRequired
            w={130}
            type="date"
          />
        </VStack>
      </Modal>
    </>
  );
};

export default Social;
