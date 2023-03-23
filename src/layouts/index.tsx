import { Center, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import GroupInfoBanner from "../components/groups/GroupInfoBanner";
import LeftNav from "../components/LeftNav";
import MembersBanner from "../components/MembersBanner";
import { useWindowDimensions } from "../libs/dimensions";
import DesktopLayout from "./Deskptop";
import MobileLayout from "./Mobile";

const Layout: React.FC = () => {
  const { width } = useWindowDimensions();

  return width > 569 ? <DesktopLayout /> : <MobileLayout />
};

// const Layout: React.FC = () => {
//   const { pathname } = useLocation();
//   const isIndexPage = pathname === "/";
//   return (
//     <>
//       <Flex p={5} pr={8} w="100%" h="100vh">
//         <LeftNav />
//         {/* <Flex ml={3}  flexDir={"column"} w="100%" h="100%"> */}
//         {!isIndexPage && <GroupInfoBanner />}
//         <Flex
//           rounded={5}
//           mt={isIndexPage ? 0 : 3}
//           w="100%"
//           h="100%"
//           bg="purple.200"
//         >
//           {isIndexPage ? (
//             <Center w="100%" h="100%">
//               <Heading size="md">
//                 Select a group or create a new one on the left
//               </Heading>
//             </Center>
//           ) : (
//             <Outlet />
//           )}
//           {/* </Flex> */}
//           <MembersBanner />
//         </Flex>
//       </Flex>
//     </>
//   );
// };

export default Layout;
