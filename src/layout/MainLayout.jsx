import { Box, Container, Toolbar } from "@mui/material";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import JdButton from "../components/JdButton";
import JdFooter from "../components/JdFooter";
import JdNavbar from "../components/JdNavbar";
import JdSidebar from "../components/JdSidebar";
import AuthContext from "../provider/AuthProvider";
import calcMinHeight from "../utils/calcMinHeight";

const styles = {
  container: {
    display: "flex",
    width: "100%",
  },
  sidebarContainer: {
    width: "223px",
  },
  main: {
    paddingY: { lg: 7, sm: 3, xs: 5 },
    paddingX: 2,
    backgroundColor: "white",
  },
};

const MainLayout = () => {
  const { isLogin } = useContext(AuthContext);
  const minHeight = calcMinHeight(isLogin);

  const toggleFooter = () => {
    const user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", "true");
    }
    window.location.reload();
  };

  return (
    <Box sx={styles?.container} flexDirection={isLogin ? "row" : "column"}>
      {isLogin && (
        <Box component="sidebar" sx={styles?.sidebarContainer}>
          <JdSidebar />
        </Box>
      )}
      <Box sx={styles?.container} flexDirection="column">
        <JdNavbar />
        <Container maxWidth="xl">
          <Box component="main" sx={styles?.main} minHeight={minHeight}>
            <Toolbar />
            <Outlet />
          </Box>
        </Container>
        <JdButton fontcolor="white" radius={0} onClick={toggleFooter}>
          Toogle Login
        </JdButton>
        <JdFooter isLogin={isLogin} />
      </Box>
    </Box>
  );
};

export default MainLayout;
