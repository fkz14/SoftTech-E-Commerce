import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/navBar/NavBar";

const MainLayout = ({children}) => {
  return (
    <Box>
      <NavBar />
      <Flex height={"100%"} width={"100%"} maxWidth={"100%"}>{children}</Flex>
    </Box>
  );
};

export default MainLayout;
