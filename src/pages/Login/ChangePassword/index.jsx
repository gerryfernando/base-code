import { Box, Grid } from "@mui/material";
import assets from "../../../assets";
import calcMinHeight from "../../../utils/calcMinHeight";
import ChangePasswordSection from "./Form";

const ChangePasswordPage = () => {
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
        <Box
          sx={{
            padding: { xs: "50px", md: "70px", xl: "130px" },
            boxShadow: "0px 0px 10px rgba(0, 53, 90, 0.21)",
            borderRadius: "20px",
          }}
          justifyContent="center"
        >
          <ChangePasswordSection />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChangePasswordPage;
