import { Flex } from "@chakra-ui/react"
import GroupsBanner from "./GroupsBanner"
import UserBanner from "./UserBanner"

interface Props {
  profileOnly?: boolean
}
const LeftNav: React.FC<Props> = ({profileOnly}) => {
  return (
    <>
      <Flex flexDir={'column'} w={{base: 70,md: 200}} h='100%'>
        <UserBanner h={profileOnly ? '100%' : 200} />
        {!profileOnly && <GroupsBanner />}
      </Flex>
    </>
  )
}

export default LeftNav