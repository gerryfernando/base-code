import { Cancel, CheckCircle, Info } from "@mui/icons-material";
import { Box, Container, Grid, Modal } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import JdTypography from "../JdTypography";
import JdButton from "../JdButton";

const JdAlert = ({
  title = "",
  message = "",
  open = false,
  width = "460px",
  type = "success",
  cancelText = "Kembali",
  onConfirm,
  okText,
  confirmColor,
  onClose = () => {},
  loading = false,
  duration = 500,
  sx,
}) => {
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    if (open) {
      setTimer(duration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    let interval = 0;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((seconds) => seconds - 1);
      }, 1000);
    }
    if (timer === 0) {
      onClose();
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width,
          bgcolor: "#ffffff",
          borderRadius: "10px",
          border: "none",
          ...sx,
        }}
      >
        <Container>
          <Grid container spacing={1} textAlign={"center"} p={2}>
            <Grid item xs={12} mt={2}>
              {type === "error" ? (
                <Cancel sx={{ fontSize: "80px" }} color="error" />
              ) : type === "info" ? (
                <Info sx={{ color: "#A1A3A5", fontSize: "80px" }} />
              ) : (
                <CheckCircle sx={{ fontSize: "80px" }} color="success" />
              )}
            </Grid>
            <Grid item xs={12}>
              <JdTypography bold big>
                {title}
              </JdTypography>
              <JdTypography fontSize="15px">{message}</JdTypography>
            </Grid>
            <Grid item xs={12} sx={{ margin: "30px 0" }}>
              <Grid spacing={2} justifyContent="center" container>
                <Grid xs={!onConfirm ? 12 : 6} item>
                  <JdButton
                    sx={{ minWidth: "125px" }}
                    fullWidth
                    variant="outlined"
                    onClick={onClose}
                  >
                    {cancelText || "Batal"}
                  </JdButton>
                </Grid>
                {!!onConfirm && (
                  <Grid xs={6} item>
                    <JdButton
                      sx={{ minWidth: "125px" }}
                      loading={loading}
                      fullWidth
                      variant="contained"
                      fontcolor="#fff"
                      bgcolor={type === "error" ? "#FC0005" : confirmColor}
                      onClick={onConfirm}
                    >
                      {okText || "Batal"}
                    </JdButton>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Modal>
  );
};

JdAlert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  duration: PropTypes.number,
  open: PropTypes.bool.isRequired,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  confirmColor: PropTypes.string,
  sx: PropTypes.object,
};

export default JdAlert;
