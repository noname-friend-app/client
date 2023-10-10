import { Center } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
}

const CreateGroupLayout: React.FC<IProps> = ({children}: IProps) => {
  return (
    <Center
        flexDir={"column"}
        ml={{ base: 0, sm: 4 }}
        bg="purple.200"
        rounded={5}
        w="100%"
        h="100%"
      >
        {children}
      </Center>
  )
}

export default CreateGroupLayout;