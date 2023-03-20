import { Flex } from "@chakra-ui/react"
import LeftNav from "../../components/LeftNav"

const CreateGroup: React.FC = () => {
  return (
    <>
     <Flex p={5} pr={8} w="100%" h="100vh">
        <LeftNav />
      </Flex>
    </>
  )
}

export default CreateGroup