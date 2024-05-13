import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import JdButton from "../../../../components/JdButton";
import JdStepper from "../../../../components/JdStepper";
import { dataKlaimSteps } from "../../../../const/dummydata";
import DataKlaimForm from "./Form";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  gap: 30,
});

const DataKlaimSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const RHF = useForm();
  const { handleSubmit } = RHF;

  const handleNext = (data) => {
    console.log(data);
    if (activeStep !== dataKlaimSteps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBefore = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <FormProvider {...RHF}>
      <form id="DaftarKlaimForm1" onSubmit={handleSubmit(handleNext)}>
        <CenteredContainer>
          <Box width="60%">
            <JdStepper steps={dataKlaimSteps} activeStep={activeStep} />
          </Box>
          <Box width="100%">
            <DataKlaimForm RHF={RHF} />
          </Box>
          <Box
            display="flex"
            justifyContent={activeStep === 0 ? "end" : "space-between"}
            alignItems="center"
            width="90%"
          >
            {activeStep !== 0 && (
              <JdButton
                sx={{ fontWeight: 600, paddingX: 4, paddingY: 0.5 }}
                variant="outlined"
                onClick={handleBefore}
              >
                Kembali
              </JdButton>
            )}
            <JdButton
              sx={{ fontWeight: 600, paddingX: 4, paddingY: 0.5 }}
              type="submit"
              fontcolor="#fff"
            >
              Berikutnya
            </JdButton>
          </Box>
        </CenteredContainer>
      </form>
    </FormProvider>
  );
};

export default DataKlaimSection;
