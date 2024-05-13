import {
  Box,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const JdDropDown = ({
  label,
  rhf,
  error,
  helperText,
  name,
  placeholder,
  options,
  required = false,
  disabled = false,
  ...props
}) => {
  const { control, watch } = rhf;
  const value = watch(name);
  const placeholderProps =
    value && value.length > 0
      ? {}
      : {
          renderValue: () => (
            <span style={{ opacity: "0.4" }}>{placeholder}</span>
          ),
        };
  return (
    <Box>
      <InputLabel
        required={!!required}
        sx={{ mb: "4px" }}
        htmlFor={name}
        error={error}
      >
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: required && "This field is required" }}
        render={({ field }) => (
          <>
            <Select
              disabled={disabled}
              error={error}
              displayEmpty
              onChange={(e) => {
                field?.onChange(e.target.value);
              }}
              value={field?.value}
              {...props}
              {...placeholderProps}
            >
              <MenuItem value="" disabled>
                {placeholder || "Select"}
              </MenuItem>
              {options.map((val, i) => {
                return (
                  <MenuItem key={`optionDrop-${i}`} value={val.value}>
                    {val.label}
                  </MenuItem>
                );
              })}
            </Select>
            {helperText && (
              <FormHelperText error={error} htmlFor={name}>
                {helperText}
              </FormHelperText>
            )}
          </>
        )}
      />
    </Box>
  );
};

JdDropDown.propTypes = {
  label: PropTypes.string,
  col: PropTypes.number,
  rhf: PropTypes.any,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  props: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
};

export default JdDropDown;
