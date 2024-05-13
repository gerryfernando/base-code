import { Box, FormHelperText, InputLabel, TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { FORMAT_TIME_DEFAULT } from "../../../const/TimeFormat";

const JdTime = ({
  error,
  helperText,
  disabled = false,
  name,
  label,
  rhf,
  required = false,
  ...props
}) => {
  const { control } = rhf;

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
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: required && "This field is required" }}
        render={({ field }) => (
          <>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <TimePicker
                disabled={disabled}
                inputFormat={FORMAT_TIME_DEFAULT}
                onChange={(e) => field.onChange(e)}
                value={field.value || null}
                {...props}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    fullWidth
                    error={!!error}
                    disabled={disabled}
                    {...props}
                  />
                )}
              />
            </LocalizationProvider>
            {helperText && (
              <FormHelperText error={!!error} htmlFor={name}>
                {helperText}
              </FormHelperText>
            )}
          </>
        )}
      />
    </Box>
  );
};

JdTime.propTypes = {
  label: PropTypes.string,
  col: PropTypes.number,
  rhf: PropTypes.any,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  props: PropTypes.any,
  required: PropTypes.bool,
};

export default JdTime;
