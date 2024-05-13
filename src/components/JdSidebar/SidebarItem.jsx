import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import { useSelector } from "react-redux";
import { lightenColor } from "../../utils/modifyColor";
import { useTheme } from "@emotion/react";

const SidebarItem = ({ item }) => {
  const theme = useTheme();

  const { appState } = useSelector((state) => state?.appState);

  const styles = {
    listItemButton: {
      "&:hover": {
        backgroundColor:
          appState === item?.state
            ? "white"
            : lightenColor(theme.palette.primary.light, 0.1),
      },
      backgroundColor: appState === item?.state ? "white" : "unset",
      padding: 2,
      gap: 1,
    },
    listItemIcon: {
      color: appState === item?.state ? theme.palette.sidebar.text : "white",
      display: "contents",
    },
    listItemText: {
      fontWeight: appState === item?.state ? 500 : 300,
      color: appState === item?.state ? theme.palette.sidebar.text : "white",
      marginLeft: item?.displayProps?.icon ? 0 : 4,
    },
  };

  return item?.displayProps && item?.path && item?.state ? (
    <ListItemButton
      component={Link}
      to={item?.path}
      sx={styles?.listItemButton}
    >
      <ListItemIcon sx={styles?.listItemIcon}>
        {item?.displayProps?.icon}
      </ListItemIcon>
      <Typography sx={styles?.listItemText}>
        {item?.displayProps?.displayText}
      </Typography>
    </ListItemButton>
  ) : null;
};

SidebarItem.propTypes = {
  item: PropType?.any,
};

export default SidebarItem;
