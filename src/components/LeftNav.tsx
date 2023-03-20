import { Flex } from "@chakra-ui/react"
import GroupsBanner from "./GroupsBanner"
import UserBanner from "./UserBanner"

const LeftNav = () => {
  return (
    <>
      <Flex w={200} h='100%'>
        <UserBanner />
        <GroupsBanner />
      </Flex>
    </>
  )
}

export default LeftNav