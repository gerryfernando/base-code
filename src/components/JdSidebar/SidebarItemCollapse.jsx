import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SidebarItem from "./SidebarItem";
import PropType from "prop-types";
import { lightenColor } from "../../utils/modifyColor";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const SidebarItemCollapse = ({ item }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { appState } = useSelector((state) => state?.appState);

  const styles = {
    listItemButton: {
      "&:hover": {
        backgroundColor: lightenColor(theme.palette.primary.light, 0.1),
      },
      backgroundColor: "unset",
      padding: 2,
      gap: 1,
    },
    listItemIcon: {
      color: "white",
      display: "contents",
    },
  };

  useEffect(() => {
    if (appState?.includes(item?.state)) {
      setOpen(true);
    }
  }, [appState, item]);

  return item?.displayProps ? (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={styles?.listItemButton}
      >
        <ListItemIcon sx={styles?.listItemIcon}>
          {item?.displayProps?.icon || "-"}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography>{item?.displayProps?.displayText}</Typography>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List disablePadding>
          {item?.child?.map((route, index) => {
            if (route?.displayProps) {
              return route?.child ? (
                <SidebarItemCollapse item={route} key={index} />
              ) : (
                <SidebarItem item={route} key={index} />
              );
            }
            return null;
          })}
        </List>
      </Collapse>
    </>
  ) : null;
};

SidebarItemCollapse.propTypes = {
  item: PropType?.any,
};

export default SidebarItemCollapse;
