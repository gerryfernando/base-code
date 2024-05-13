import PropTypes from "prop-types";
import { Box, Grid, Stack, Typography } from "@mui/material";
import assets from "../../assets";
import { useTheme } from "@emotion/react";

const styles = {
  footerContainer: {
    bottom: 0,
    width: "100%",
  },
  contactContainer: {
    padding: 5,
    color: "white",
  },
  infoContainer: {
    paddingY: 2,
    paddingX: 5,
  },
};

const JdFooter = ({ isLogin }) => {
  const theme = useTheme();

  const currentYear = new Date().getFullYear();
  const VERSION = import.meta.env.VITE_REACT_APP_VERSION;

  return (
    <Box sx={styles.footerContainer}>
      {!isLogin && (
        <Box
          sx={{
            ...styles.contactContainer,
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Grid
            container
            display="flex"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid xs={12} sm={6} item textAlign={{ xs: "center", sm: "left" }}>
              <Stack fontSize="14px">
                <Typography>Head Office Asuransi Jasindo</Typography>
                <Typography>Telp : (021) 3924737</Typography>
                <Typography>Jakarta Pusat, 10340</Typography>
                <Typography>Jln. Menteng Raya No. 21</Typography>
                <Typography>Graha Jasindo</Typography>
              </Stack>
            </Grid>
            <Grid xs={12} sm={6} item textAlign={{ xs: "center", sm: "right" }}>
              <Box sx={styles.logo}>
                <img src={assets.images.logoWhite} alt="logo" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
      <Box
        sx={{
          ...styles.infoContainer,
          color: isLogin ? "inherit" : "white",
          backgroundColor: isLogin
            ? "transparent"
            : theme.palette.secondary.main,
        }}
      >
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid
            xs={12}
            sm={isLogin ? 12 : 6}
            md={6}
            item
            textAlign={{
              xs: "center",
              sm: isLogin ? "center" : "left",
              md: "left",
            }}
          >
            <Typography fontSize="0.8rem" fontWeight={400}>
              © {currentYear} PT. Asuransi Jasa Indonesia. Hak Cipta Dilindungi
              Undang-Undang
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={isLogin ? 12 : 6}
            md={6}
            item
            textAlign={{
              xs: "center",
              sm: isLogin ? "center" : "right",
              md: "right",
            }}
          >
            <Typography fontSize="0.8rem" fontWeight={400}>
              Jasindo {VERSION}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

JdFooter.propTypes = {
  isLogin: PropTypes.bool,
};

export default JdFooter;
