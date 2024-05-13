import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const JdTypography = ({
  children,
  bold = false,
  semiBold = false,
  big = false,
  small = false,
  title = false,
  textAlign,
  sx,
  fontSize,
  color = "#000000DE",
  ...props
}) => {
  const styleTitle = {
    display: "inline-block",
    paddingBottom: "10px",
    background: "linear-gradient(to right, #221F20, #221F20)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "66px 3px",
    backgroundPosition: "0% 100%",
  };
  const styles = {
    fontWeight: bold || title ? "800" : semiBold ? "600" : "400",
    fontSize:
      big || title ? "36px" : small ? "14px" : fontSize ? fontSize : "18px",
    color: color,
    fontFamily: `Mulish, sans-serif`,
  };

  return (
    <Typography
      style={{ ...sx, ...styles, ...(title ? styleTitle : {}) }}
      textAlign={textAlign}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </Typography>
  );
};

JdTypography.propTypes = {
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf([
    "body1",
    "body2",
    "button",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "inherit",
    "overline",
    "subtitle1",
    "subtitle2",
    "string",
  ]),
  textAlign: PropTypes.string,
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  big: PropTypes.bool,
  small: PropTypes.bool,
  title: PropTypes.bool,
  sx: PropTypes.object,
  color: PropTypes.string,
  props: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default JdTypography;
