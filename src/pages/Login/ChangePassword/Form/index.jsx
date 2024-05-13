import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowBack,
  LockOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import moment from "moment";
import JdTypography from "../../../../components/JdTypography";
import JdButton from "../../../../components/JdButton";
import { FORMAT_DATE_DEFAULT } from "../../../../const/TimeFormat";

const ChangePasswordSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const RHF = useForm();
  const {
    handleSubmit,
    getValues,
    formState: { errors },
    register,
    watch,
  } = RHF;

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const newPassword = watch("newPassword");

  const onSubmitChangePassword = (data) => {
    console.log(data, moment(getValues("date")).format(FORMAT_DATE_DEFAULT));
    setLoading(true);
    navigate("/login");
  };

  return (
    <Stack spacing={5}>
      <JdTypography bold fontSize="28px" textAlign="center">
        Ganti Password
      </JdTypography>
      <FormProvider {...RHF}>
        <form
          id="ChangePasswordForm"
          onSubmit={handleSubmit(onSubmitChangePassword)}
        >
          <Stack gap={2}>
            <TextField
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              size="small"
              placeholder="new password"
              fullWidth
              {...register("newPassword", {
                required: "This field is required",
              })}
              InputProps={{
                style: {
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      sx={{ color: "lightgray", marginRight: 0.5 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title={
                        showNewPassword ? "Hide Password" : "Show Password"
                      }
                    >
                      <IconButton
                        sx={{ padding: 0 }}
                        variant="icon"
                        aria-label="toggle password visibility"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? (
                          <VisibilityOutlined sx={{ color: "lightgray" }} />
                        ) : (
                          <VisibilityOffOutlined sx={{ color: "lightgray" }} />
                        )}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              error={!!errors?.newPassword}
              helperText={
                errors?.newPassword ? errors?.newPassword.message : ""
              }
            />
            <TextField
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              size="small"
              placeholder="confirm new password"
              fullWidth
              {...register("confirmPassword", {
                required: "This field is required",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              InputProps={{
                style: {
                  paddingLeft: 8,
                  paddingRight: 8,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined
                      sx={{ color: "lightgray", marginRight: 0.5 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title={
                        showConfirmPassword ? "Hide Password" : "Show Password"
                      }
                    >
                      <IconButton
                        sx={{ padding: 0 }}
                        variant="icon"
                        aria-label="toggle password visibility"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <VisibilityOutlined sx={{ color: "lightgray" }} />
                        ) : (
                          <VisibilityOffOutlined sx={{ color: "lightgray" }} />
                        )}
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              error={!!errors?.confirmPassword}
              helperText={
                errors?.confirmPassword ? errors?.confirmPassword.message : ""
              }
            />
            <Box
              paddingX={4}
              marginTop={2}
              display="flex"
              justifyContent="center"
            >
              <JdButton loading={loading} fontcolor="white" type="submit">
                Kirim Link
              </JdButton>
            </Box>
          </Stack>
        </form>
      </FormProvider>

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

export default ChangePasswordSection;
