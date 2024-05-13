import PropTypes from "prop-types";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import JdTypography from "../../../../components/JdTypography";
import { ArrowBack, PersonOutlined } from "@mui/icons-material";
import JdButton from "../../../../components/JdButton";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import moment from "moment";
import { FORMAT_DATE_DEFAULT } from "../../../../const/TimeFormat";
import { useState } from "react";

const SendEmailSection = ({ setSuccess }) => {
  const theme = useTheme();
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmitSendEmail = (data) => {
    console.log(data, moment(getValues("date")).format(FORMAT_DATE_DEFAULT));
    setLoading(true);
    setSuccess(true);
  };

  return (
    <Stack spacing={5}>
      <JdTypography bold fontSize="28px" textAlign="center">
        Lupa Password
      </JdTypography>
      <form onSubmit={handleSubmit(onSubmitSendEmail)}>
        <Stack gap={1}>
          <JdTypography small>
            Sistem akan mengirimkan tautan pemulihan ke email Anda
          </JdTypography>
          <TextField
            fullWidth
            size="small"
            placeholder="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            InputProps={{
              style: {
                paddingLeft: 8,
                paddingRight: 8,
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlined
                    sx={{ color: "lightgray", marginRight: 0.5 }}
                  />
                </InputAdornment>
              ),
            }}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <Box
            paddingX={4}
            marginTop={2}
            display="flex"
            justifyContent="center"
          >
            <JdButton fontcolor="white" type="submit" loading={loading}>
              Kirim Link
            </JdButton>
          </Box>
        </Stack>
      </form>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <JdTypography
          small
          color={theme.palette.primary.light}
          sx={{ display: "flex", alignItems: "center", gap: 5 }}
        >
          <ArrowBack /> Kembali ke halaman login
        </JdTypography>
      </Link>
    </Stack>
  );
};

SendEmailSection.propTypes = {
  setSuccess: PropTypes.func,
};

export default SendEmailSection;
