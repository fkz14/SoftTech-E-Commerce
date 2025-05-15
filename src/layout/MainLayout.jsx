import { Box, Flex } from "@chakra-ui/react";
import NavBar from "../components/navBar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box>
      <NavBar />
      <Flex height={"100%"} width={"100%"} maxWidth={"100%"}>
        <Outlet />
      </Flex>
    </Box>
  );
};

export default MainLayout;
