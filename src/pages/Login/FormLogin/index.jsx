import {
  LockOutlined,
  PersonOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import JdTypography from "../../../components/JdTypography";
import JdButton from "../../../components/JdButton";
import JdAlert from "../../../components/JdAlert";
import JdApi from "../../../services";

const FormLogin = () => {
  const recaptchaRef = React.createRef();
  const navigate = useNavigate();
  const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;
  const RHF = useForm();
  const { handleSubmit, register, setValue } = RHF;
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitLogin = async (data) => {
    if (!data.username && !data.password) {
      setErrorMessage("Maaf, kolom email dan password belum diisi");
      setShowModalInfo(true);
    } else if (!data.username) {
      setErrorMessage("Maaf, kolom email belum diisi");
      setShowModalInfo(true);
    } else if (!data.password) {
      setErrorMessage("Maaf, kolom password belum diisi");
      setShowModalInfo(true);
    } else if (!data.captcha) {
      setErrorMessage("Maaf, kolom captcha belum diisi");
      setShowModalInfo(true);
    } else {
      try {
        setLoading(true);
        const res = await JdApi.post(
          import.meta.env.VITE_BASE_URL + "/auth/login",
          { ...data, internalUser: true }
        );
        const userData = res.data.data;
        localStorage.setItem("token", userData.accessToken);
        localStorage.setItem("user", userData.username);
        // localStorage.setItem("expired", userData.expiredMs);
        navigate("/halaman-utama");
        window.location.reload();
      } catch (error) {
        setErrorMessage(error?.response?.data?.message);
        setShowModalError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  const styleLogin = {
    form: {
      padding: { xs: "20px", sm: "50px", md: "60px 150px" },
      boxShadow: "0px 0px 20px rgba(0, 53, 90, 0.21)",
      borderRadius: "20px",
      textAlign: "center",
      minWidth: { xs: 0, sm: 0, md: "300px" },
      maxWidth: "567px",
    },
    image: { display: { xs: "none", sm: "flex", md: "flex", lg: "flex" } },
    iconColor: { color: "lightgray" },
    buttonSubmit: { fontSize: "20px", padding: "12.5px 47.5px" },
  };

  function onChangeCaptcha(value) {
    setValue("captcha", value);
  }

  return (
    <>
      <Box sx={styleLogin.form} justifyContent="center">
        <Stack spacing="50px">
          <JdTypography bold fontSize="28px">
            Masuk Easy Claim
          </JdTypography>
          <FormProvider {...RHF}>
            <form id="LoginForm" onSubmit={handleSubmit(onSubmitLogin)}>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={2}
              >
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    {...register("username")}
                    placeholder="Username/Email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlined sx={styleLogin.iconColor} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Input Password"
                    fullWidth
                    {...register("password")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined sx={styleLogin.iconColor} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Tooltip
                            title={
                              showPassword ? "Hide Password" : "Show Password"
                            }
                            sx={{ padding: 0 }}
                          >
                            <IconButton
                              size="small"
                              variant="icon"
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <VisibilityOutlined sx={styleLogin.iconColor} />
                              ) : (
                                <VisibilityOffOutlined
                                  sx={styleLogin.iconColor}
                                />
                              )}
                            </IconButton>
                          </Tooltip>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div
                    className="captcha"
                    style={{
                      transform: "scale(0.85)",
                      transformOrigin: "0 0",
                    }}
                  >
                    <ReCAPTCHA
                      size="normal"
                      ref={recaptchaRef}
                      sitekey={siteKey}
                      onChange={onChangeCaptcha}
                    />
                  </div>
                </Grid>
                <Grid display="flex" justifyContent="end" item xs={12}>
                  <Link to={"/forgot-password"} className="linkComp">
                    Lupa Password!
                  </Link>
                </Grid>
                <Grid display="flex" justifyContent="center" item xs={12}>
                  <JdButton
                    loading={loading}
                    fontcolor="#ffffff"
                    sx={styleLogin.buttonSubmit}
                    size="large"
                    disableRipple
                    type="submit"
                  >
                    Login
                  </JdButton>
                </Grid>
              </Grid>
            </form>
          </FormProvider>
          <div>
            <JdTypography small bold>
              Belum memiliki akun?
            </JdTypography>
            <JdTypography small bold>
              <Link className="linkComp" to={"/home"}>
                Lapor klaim
              </Link>{" "}
              mudah tanpa akun
            </JdTypography>
          </div>
        </Stack>
      </Box>
      {(showModalError || setShowModalInfo) && (
        <JdAlert
          title="Gagal Login"
          type={showModalError ? "error" : "info"}
          width="359px"
          message={errorMessage}
          open={showModalInfo || showModalError}
          onClose={() => {
            setShowModalError(false);
            setShowModalInfo(false);
          }}
        />
      )}
    </>
  );
};

export default FormLogin;
