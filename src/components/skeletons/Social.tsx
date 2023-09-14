import { Flex, Heading, Skeleton, VStack } from "@chakra-ui/react"
import SocialLayout from "../../layouts/Social"

const SocialSkeleton: React.FC = () => {
  return (
    <SocialLayout>
      <Heading mt={4} >Social</Heading>
      <VStack mt={4} spacing={4}>
        {Array(5).map((_, i) => (
          <Flex key={i}>
            <Skeleton w={'100%'} h={120} />
          </Flex>
        ))}
      </VStack>
    </SocialLayout>
  )
}

export default SocialSkeleton