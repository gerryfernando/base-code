import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import { darkenColor } from "../../utils/modifyColor";
import { LoadingButton } from "@mui/lab";
import { IconButton } from "@mui/material";

const CustomButton = styled(LoadingButton)(
  ({
    padding,
    radius,
    bgcolor,
    border,
    fontcolor,
    variant,
    theme,
    disabled,
  }) => ({
    borderRadius: radius,
    backgroundColor:
      variant === "outlined" || variant === "text" || variant === "icon"
        ? "transparent"
        : bgcolor || theme.palette.secondary.main,
    color:
      variant === "outlined" && !fontcolor
        ? theme.palette.secondary.main
        : fontcolor || "inherit",
    border:
      border ||
      (variant === "outlined"
        ? `1px solid ${theme.palette.secondary.main}`
        : "none"),
    "&:hover": {
      backgroundColor:
        variant === "outlined" || variant === "text" || variant === "icon"
          ? "transparent"
          : bgcolor
          ? darkenColor(bgcolor, 0.1)
          : darkenColor(theme.palette.secondary.main, 0.1),
      border:
        border ||
        (variant === "outlined"
          ? `1px solid ${theme.palette.secondary.main}`
          : "none"),
      boxShadow: "none",
      borderRadius: radius,
    },
    padding: padding,
    boxShadow: "none",
    textTransform: "none",
    pointerEvents: disabled ? "none" : "auto",
    opacity: disabled ? 0.5 : 1,
  })
);

const JdButton = ({
  onClick,
  children,
  variant,
  fontcolor,
  size = "medium",
  radius = 10,
  bgcolor,
  border,
  disableRipple,
  disabled,
  loading,
  ...props
}) => {
  const theme = useTheme();

  return (
    <CustomButton
      onClick={onClick}
      variant={variant === "icon" ? "text" : variant || "contained"}
      size={size}
      fontcolor={fontcolor}
      radius={variant === "icon" ? "100%" : radius}
      bgcolor={bgcolor}
      border={border}
      disableRipple={variant === "icon" ? true : disableRipple}
      disabled={disabled}
      theme={theme}
      loading={loading}
      {...props}
    >
      {variant === "icon" ? (
        <IconButton
          size={size}
          sx={{
            backgroundColor: bgcolor,
            color: fontcolor,
            borderRadius: radius,
            "&:hover": {
              backgroundColor: bgcolor
                ? darkenColor(bgcolor, 0.1)
                : "transparent",
            },
            padding: size === "small" ? 1 : size === "large" ? 3 : 2,
          }}
        >
          {children}
        </IconButton>
      ) : (
        [children]
      )}
    </CustomButton>
  );
};

JdButton.propTypes = {
  bgcolor: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.node.isRequired,
  disableRipple: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fontcolor: PropTypes.string,
  onClick: PropTypes.func,
  radius: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "icon"]),
};

export default JdButton;
