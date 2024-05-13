import {
  Autocomplete,
  Box,
  FormHelperText,
  InputLabel,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const JdAutoComplete = ({
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
  const { control } = rhf;

  // const CustomText = styled(TextField)(() => ({
  //   // borderRadius: 10,
  //   // border: "0.3px solid",
  //   // "& fieldset": { border: "0.3px solid" },
  // }));
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
            <Autocomplete
              label="tes"
              disabled={disabled}
              onChange={(e, v) => {
                field?.onChange(v?.value || null);
              }}
              value={
                options.find((item) => item.value === field?.value) || null
              }
              options={[
                {
                  label: placeholder,
                },
                ...options,
              ]}
              isOptionEqualToValue={(option, val) => option.value === val.value}
              getOptionLabel={(option) => option.label}
              getOptionDisabled={(option) => !option?.value}
              renderInput={(params) => (
                <TextField
                  error={error}
                  placeholder={placeholder}
                  {...params}
                />
              )}
              {...props}
            />
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

JdAutoComplete.propTypes = {
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

export default JdAutoComplete;
