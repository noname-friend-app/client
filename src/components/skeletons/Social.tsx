import {  Heading, Skeleton, VStack } from "@chakra-ui/react";
import SocialLayout from "../../layouts/Social";

const SocialSkeleton: React.FC = () => {
  return (
    <SocialLayout>
      <Heading mt={4}>Social</Heading>
      <VStack w="100%" mt={4} spacing={4}>
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} w={'100%'} h={120} size={{ base: "8", md: "10" }} />
        ))}
      </VStack>
    </SocialLayout>
  );
};

export default SocialSkeleton;
