import { Box, FormHelperText, InputLabel, TextField } from "@mui/material";
import PropTypes from "prop-types";
import TextcurrencyFormat from "../../../utils/TextcurrencyFormat";

const JdTextField = ({
  rhf,
  value,
  helperText,
  error,
  disabled = false,
  name,
  defaultValue,
  size = "small",
  placeholder,
  label,
  isTextArea = false,
  rows = 3,
  isNumber = false,
  required = false,
  ...props
}) => {
  const { register } = rhf;

  // const CustomText = styled(TextField)(() => ({
  //   // borderRadius: 10,
  //   // border: "0.3px solid",
  //   // "& fieldset": { border: "none" },
  // }));

  const InputProps = isNumber
    ? {
        InputProps: {
          inputComponent: TextcurrencyFormat,
        },
      }
    : {};

  return (
    <Box>
      <InputLabel
        required={!!required}
        sx={{ mb: "4px" }}
        htmlFor={name}
        error={!!error}
      >
        {label}
      </InputLabel>
      <TextField
        {...register(name, {
          required: required && "This field is required",
        })}
        size={size}
        placeholder={placeholder}
        fullWidth
        defaultValue={defaultValue}
        disabled={disabled}
        error={!!error}
        multiline={isTextArea}
        rows={isTextArea ? rows : 1}
        type={isNumber ? "number" : "text"}
        value={value}
        {...props}
        {...InputProps}
      />
      {helperText && (
        <FormHelperText error={error} htmlFor={name}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
};

JdTextField.propTypes = {
  col: PropTypes.number,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  isNumber: PropTypes.bool,
  isTextArea: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  props: PropTypes.any,
  required: PropTypes.bool,
  rhf: PropTypes.shape({
    register: PropTypes.func
  }),
  rows: PropTypes.number,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  value: PropTypes.any
}

export default JdTextField;
