import { Flex, Image } from "@chakra-ui/react";

interface Props {
  label: string;
  path: string;
  color: string;
  img: string;
}

const TabCard: React.FC<Props> = ({ label, path, color, img }) => {
  return (
    <>
      <Flex
        rounded={10}
        alignSelf={"center"}
        w={200}
        
        // w={{ base: "100%", lg: 350 }}
        h={{ base: 100, sm: 140, md: 200 }}
        bg={color}
      >
        {/* <Flex
          pos="absolute"
          w={{ base: 280, lg: 350 }}
          h={{ base: 100, sm: 140, md: 200 }}
          ml={4}
          mt={-4}
          rounded={10}
          flexDir="column"
          bg="red"
        >
          <Image rounded={10} src={img} w={"100%"} h={"100%"} />
        </Flex> */}
      </Flex>
    </>
  );
};

export default TabCard;
