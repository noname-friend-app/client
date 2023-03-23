import { Flex, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
interface Props {
  label: string;
  path: string;
  color: string;
  img: string;
}

const TabCard: React.FC<Props> = ({ label, path, color, img }) => {
  const [hover, setHover] = useState<boolean>(false);
  const navigate = useNavigate()

  return (
    <>
      <Flex
        rounded={10}
        alignSelf={"center"}
        w={{ base: "100%", sm: 200, lg: 300 }}
        h={{ base: 120, sm: 200, md: 200 }}
        bg={color}
        justify="center"
        _hover={{cursor: 'pointer'}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => navigate(path)}
      >
        <Flex
          w="95%"
          h={"93%"}
          alignSelf="center"
          rounded={10}
          flexDir="column"
        >
          <motion.div
            style={{ height: "100%" }}
            // transition={{ delay: 1 }}
            animate={{
              x: hover ? 20 : 0,
              y: hover ? -20 : 0,
            }}
          >
            <Image rounded={10} src={img} w={"100%"} h={"100%"} />
          </motion.div>
          <motion.div
            style={{
              position: "absolute",
              alignSelf: "end",
            }}
            transition={{
              delay: hover ? -1 : 0.2,
            }}
            animate={{
              opacity: hover ? 0 : 1,
            }}
          >
            <Flex borderBottomLeftRadius={5} bg={color} p={2}>
              <Heading color="purple.200" size="md">
                {label}
              </Heading>
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
};

export default TabCard;
