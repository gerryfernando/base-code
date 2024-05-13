import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";

function JdTabPanel({ children, value, index, ...other }) {
  const theme = useTheme();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{
        boxShadow: `0px 2px 4px ${theme.palette.tabs.shadow}`,
        borderRight: `1px solid ${theme.palette.tabs.border}`,
        borderLeft: `1px solid ${theme.palette.tabs.border}`,
        borderBottom: `1px solid ${theme.palette.tabs.border}`,
        borderRadius: "0 10px 10px 10px",
      }}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

JdTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default JdTabPanel;
