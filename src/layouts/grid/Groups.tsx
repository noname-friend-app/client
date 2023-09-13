import { Flex } from "@chakra-ui/react"

interface GroupsLayoutProps {
  children: React.ReactNode
  display: string
  width: number
}
const GroupsLayout: React.FC<GroupsLayoutProps> = ({children, display, width}: GroupsLayoutProps) => {
  return (
    <Flex
        display={display}
        rounded={10}
        bg={width > 569 ? "purple.200" : "purple.300"}
        w="100%"
        h="100%"
        justifyContent="space-between"
        flexDir="column"
        p={3}
      >
        {children}
      </Flex>
  )
}

export default GroupsLayout