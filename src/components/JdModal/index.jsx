import { CancelRounded, CheckCircleRounded, Close } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import JdTypography from "../JdTypography";
import JdButton from "../JdButton";

const JdModal = ({
  open,
  onClose,
  title,
  size = "md",
  isConfirm = false,
  okText,
  cancelText,
  children,
  onConfirm,
  confirmColor,
  isIcon = false,
  loading,
  error,
}) => {
  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "10px",
          boxShadow: "1px 1px 8px rgb(0,0,0,0.5)",
          padding: "50px",
        },
      }}
      onClose={(event, reason) => {
        if (reason && reason === "backdropClick") return;
        onClose();
      }}
      maxWidth={size}
      fullWidth
      hideBackdrop
    >
      <DialogTitle mb="40px">
        <JdTypography title>{title}</JdTypography>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 18,
              top: 18,
            }}
          >
            <Close />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      {isConfirm && (
        <DialogActions>
          <Grid container columnSpacing={1} mt="40px">
            <Grid item xs={12} sx={{ textAlign: "right", py: 1, pr: 2 }}>
              <JdButton
                variant="outlined"
                size="medium"
                sx={{ mr: 1, borderRadius: "10px" }}
                startIcon={isIcon && <CancelRounded />}
                onClick={onClose}
                type="button"
              >
                <span> {cancelText || "Cancel"}</span>
              </JdButton>

              <JdButton
                loading={loading}
                startIcon={isIcon && <CheckCircleRounded />}
                loadingPosition="start"
                type="button"
                fontcolor="#fff"
                sx={{ mr: 1, borderRadius: "10px" }}
                variant="contained"
                bgcolor={error ? "#FC0005" : confirmColor}
                onClick={onConfirm}
              >
                {okText || "OK"}
              </JdButton>
            </Grid>
          </Grid>
        </DialogActions>
      )}
    </Dialog>
  );
};

JdModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  isConfirm: PropTypes.bool,
  loading: PropTypes.bool,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  confirmColor: PropTypes.string,
  isIcon: PropTypes.bool,
  error: PropTypes.bool,
};

export default JdModal;
