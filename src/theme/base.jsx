import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Mulish, sans-serif",
    },
  },
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      main: "#36A0C4",
      light: "#5BCFF6",
    },
    secondary: {
      main: "#00355A",
    },
    accent: {
      main: "#FAA61B",
    },
    message: {
      success: "#23BD33",
      error: "#FF3548",
      warning: "#FFBB34",
    },
    sidebar: {
      background: "linear-gradient(177.56deg, #44C8F5 0%, #36A0C4 100%)",
      text: "#676767",
    },
    stepper: {
      connector: "#B2B2B2",
    },
    table: {
      background: {
        childEven: "aliceblue",
        head: "#AFD3FF",
      },
    },
    tabs: {
      border: "#CACACA",
      background: "#EBEBEB",
      shadow: "rgba(0, 0, 0, 0.1)",
    },
    border: {
      main: "rgba(0, 0, 0, 0.2)",
    },
    text: {
      grey: "#A1A3A5",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined", disabled: true },
          style: {
            borderRadius: "10px !important",
            backgroundColor: "#F6F8FD",
            color: "black",
          },
        },
      ],
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#F6F8FD",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px !important",
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 30px #fff inset !important",
            },
          },
        },
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "#000",
            WebkitTextFillColor: "#000",
            transition: "background-color 5000s",
            "&:-webkit-text-fill-color": "#fff !important",
          },
        },
        sizeSmall: ({ theme }) =>
          theme.unstable_sx({
            "& legend": {
              display: "none",
            },
            "& fieldset": {
              top: 0,
            },
          }),
      },
    },
  },
});

export default theme;
