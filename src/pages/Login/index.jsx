import { Box, Grid } from "@mui/material";
import assets from "../../assets";
import FormLogin from "./FormLogin";
import "./index.css";
import calcMinHeight from "../../utils/calcMinHeight";

const LoginPage = () => {
  const minHeight = calcMinHeight(false);

  return (
    <Grid
      container
      minHeight={minHeight}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ sm: "column", md: "row" }}
    >
      <Grid
        sx={{
          display: { xs: "none", sm: "flex" },
          marginBottom: { sm: 2, md: 0 },
        }}
        paddingX={{ sm: 25, md: 5, lg: 15 }}
        justifyContent="center"
        item
        sm={12}
        md={6}
      >
        <Box>
          <img
            src={assets.images.bgLogin}
            width="100%"
            alt="bgLogin"
            loading="lazy"
          />
        </Box>
      </Grid>
      <Grid paddingX={{ md: 5, lg: 15 }} item md={6} sm={12}>
        <FormLogin />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
