import { Container, Stack, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSnackbar } from "notistack";
import JdButton from "../../../components/JdButton";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const ToasterPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const showToast = (message, variant) => {
    enqueueSnackbar(message, {
      variant: variant,
    });
  };

  return (
    <CenteredContainer>
      <Stack direction="row" gap={1}>
        <JdButton
          bgcolor={theme.palette.message.success}
          onClick={() => showToast("Success message", "success")}
        >
          Show Success Toaster
        </JdButton>
        <JdButton
          bgcolor={theme.palette.message.error}
          onClick={() => showToast("Error message", "error")}
        >
          Show Error Toaster
        </JdButton>
        <JdButton
          bgcolor={theme.palette.message.warning}
          onClick={() => showToast("Warning message", "warning")}
        >
          Show Warning Toaster
        </JdButton>
      </Stack>
    </CenteredContainer>
  );
};

export default ToasterPage;
