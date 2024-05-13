import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@emotion/react";

function JdTabs({ tabs, onChange, value }) {
  const theme = useTheme();

  return (
    <Tabs
      value={value}
      onChange={onChange}
      textColor="black"
      indicatorColor="none"
      sx={{
        borderRadius: "10px 10px 0 0",
        borderTop: `1px solid ${theme.palette.tabs.border}`,
        borderRight: `1px solid ${theme.palette.tabs.border}`,
        borderLeft: `1px solid ${theme.palette.tabs.border}`,
      }}
    >
      {tabs.map((tab, index) => (
        <Tab
          disableRipple
          key={index}
          label={tab.label}
          sx={{
            textTransform: "none",
            backgroundColor:
              value === index ? "white" : theme.palette.tabs.background,
            borderBottom:
              value === index
                ? "none"
                : `1px solid ${theme.palette.tabs.border}`,
            borderLeft:
              index === 0
                ? "none"
                : value === index
                ? "none"
                : `1px solid ${theme.palette.tabs.border}`,
            borderRight:
              index === tabs.length - 1
                ? "none"
                : value === index
                ? "none"
                : `1px solid ${theme.palette.tabs.border}`,
          }}
        />
      ))}
    </Tabs>
  );
}

JdTabs.propTypes = {
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.number.isRequired,
};

export default JdTabs;
