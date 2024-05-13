import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Typography } from "@mui/material";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.stepper.connector,
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, active, completed }) => ({
  backgroundColor: active || completed ? theme.palette.accent.main : "#fff",
  border: `1px solid ${
    active || completed ? theme.palette.accent.main : "grey"
  }`,
  zIndex: 1,
  color: active || completed ? "#fff" : theme.palette.text.primary,
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot
      className={className}
      active={active}
      completed={completed}
    >
      {icon}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

export default function JdStepper({ steps, activeStep }) {
  return (
    <Stack sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
        sx={{
          flexDirection: { xs: "column", sm: "unset" },
          alignItems: { xs: "center", sm: "unset" },
        }}
      >
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              display: {
                xs: index === activeStep ? "block" : "none",
                sm: "unset",
              },
            }}
          >
            <StepLabel
              StepIconComponent={(props) => (
                <ColorlibStepIcon {...props} icon={index + 1} />
              )}
            >
              <Typography fontWeight={700} fontSize={14}>
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}

JdStepper.propTypes = {
  activeStep: PropTypes.number,
  steps: PropTypes.shape({
    map: PropTypes.func,
  }),
};
