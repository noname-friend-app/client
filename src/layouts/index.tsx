import { Text } from "@chakra-ui/react";
import { useWindowDimensions } from "../libs/dimensions";
import DesktopLayout from "./Deskptop";
import MobileLayout from "./Mobile";

const Layout: React.FC = () => {
  const { width } = useWindowDimensions();

  return width > 569 ? <DesktopLayout /> : <MobileLayout />
};

export default Layout;
