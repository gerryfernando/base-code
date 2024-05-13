import { Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import sidebarRoutes from "../../routes/sidebarRoutes";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItem from "./SidebarItem";
import { useTheme } from "@emotion/react";

const JdSidebar = () => {
  const theme = useTheme();

  const styles = {
    drawer: {
      width: "223px",
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        paddingY: 2,
        width: "223px",
        boxSizing: "border-box",
        borderRight: "0px",
        background: theme.palette.sidebar.background,
        color: "white",
      },
    },
    toolbar: {
      marginBottom: "15px",
    },
    stack: {
      width: "100%",
    },
  };
  return (
    <Drawer variant="permanent" sx={styles?.drawer}>
      <List disablePadding>
        <Toolbar sx={styles?.toolbar}>
          <Stack sx={styles?.stack} direction="row" justifyContent="center">
            <img src={assets.images.logoWhite} alt="logo" loading="lazy" />
          </Stack>
        </Toolbar>
        {sidebarRoutes?.map((route, index) => {
          if (route?.displayProps) {
            return route?.child ? (
              <div key={index} style={styles?.list}>
                <SidebarItemCollapse item={route} />
              </div>
            ) : (
              <div key={index} style={styles?.list}>
                <SidebarItem item={route} />
              </div>
            );
          }
          return null;
        })}
      </List>
      <Stack
        sx={styles?.stack}
        direction="row"
        justifyContent="center"
        marginTop="auto"
      >
        <img src={assets.images.bumnWhite} alt="logo BUMN" loading="lazy" />
      </Stack>
    </Drawer>
  );
};

export default JdSidebar;
