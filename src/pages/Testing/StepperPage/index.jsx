import { Box, Container, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import JdStepper from "../../../components/JdStepper";
import { steps } from "../../../const/dummydata";
import { useState } from "react";
import JdButton from "../../../components/JdButton";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StepperPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep !== steps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBefore = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <CenteredContainer>
      <JdStepper steps={steps} activeStep={activeStep} />
      <Toolbar />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="90%"
      >
        <JdButton
          sx={{ fontWeight: 600, paddingX: 4, paddingY: 0.5 }}
          variant="outlined"
          onClick={handleBefore}
        >
          Kembali
        </JdButton>
        <JdButton
          sx={{ fontWeight: 600, paddingX: 4, paddingY: 0.5 }}
          onClick={handleNext}
        >
          Berikutnya
        </JdButton>
      </Box>
    </CenteredContainer>
  );
};

export default StepperPage;
