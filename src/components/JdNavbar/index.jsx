import {
  AppBar,
  Box,
  Breadcrumbs,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import navbarRoutes from "../../routes/navbarRoutes";
import assets from "../../assets";
import JdButton from "../JdButton";
import { useContext, useState } from "react";
import AuthContext from "../../provider/AuthProvider";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import JdTypography from "../JdTypography";
import { MoreVert } from "@mui/icons-material";

const styles = {
  appBar: {
    marginLeft: "223px",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  toolbar: {
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: { xs: "100%", sm: "100%", md: "auto" },
  },
  toolbarLogin: {
    background: "white",
    display: "flex",
    justifyContent: { xs: "end", sm: "end", md: "space-between" },
    alignItems: "center",
  },
  profileStack: {
    color: "black",
    textAlign: "right",
    gap: 2,
  },
  loginButton: {
    fontWeight: 300,
    paddingY: 0.5,
    paddingX: 2.5,
  },
};

const JdNavbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);
  const { appState, appStateDisplayText } = useSelector(
    (state) => state?.appState
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{ ...styles.appBar, width: !isLogin ? "100%" : `calc(100% - 223px)` }}
    >
      <Toolbar sx={isLogin ? styles.toolbarLogin : styles.toolbar}>
        {isLogin ? (
          <Breadcrumbs
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            aria-label="breadcrumb"
          >
            <Link className="linkComp" to="/halaman-utama">
              {appStateDisplayText || "Parent Page"}
            </Link>
            <JdTypography>Child Page</JdTypography>
          </Breadcrumbs>
        ) : (
          <img src={assets.images.bumn} alt="Logo BUMN" loading="lazy" />
        )}
        <Box display="flex" alignItems="center" gap={2}>
          {isLogin ? (
            <>
              <Stack sx={styles.profileStack}>
                <Typography fontWeight={400} lineHeight={0}>
                  Robertus Dwi Ari Utomo
                </Typography>
                <Typography fontSize={12} fontWeight={300} lineHeight={0}>
                  Tertanggung
                </Typography>
              </Stack>
              <img
                src={assets.images.profile}
                alt="Profile Picture"
                loading="lazy"
              />
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: { xs: "flex", sm: "flex", md: "none" },
                  paddingRight: "20px",
                }}
              >
                <JdButton variant="icon" onClick={handleClick}>
                  <MoreVert />
                </JdButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  {navbarRoutes.map((route) => (
                    <MenuItem
                      key={route.path}
                      onClick={() => {
                        navigate(route.path);
                        handleClose();
                      }}
                    >
                      {route.displayProps.displayText}
                    </MenuItem>
                  ))}
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                      handleClose();
                    }}
                  >
                    Login
                  </MenuItem>
                </Menu>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                {navbarRoutes.map((route) => (
                  <JdButton
                    disableRipple
                    variant="text"
                    fontcolor={
                      appState === route.state
                        ? theme.palette.accent.main
                        : theme.palette.primary.main
                    }
                    radius={0}
                    key={route.path}
                    component={Link}
                    to={route.path}
                  >
                    <Typography
                      sx={{
                        fontWeight: appState === route.state ? 500 : 400,
                        paddingY: 1,
                        borderBottom:
                          appState === route.state
                            ? `2px solid ${theme.palette.accent.main}`
                            : "none",
                      }}
                    >
                      {route.displayProps.displayText}
                    </Typography>
                  </JdButton>
                ))}
                <JdButton
                  radius={50}
                  bgcolor={theme.palette.secondary.main}
                  sx={styles.loginButton}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </JdButton>
              </Box>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default JdNavbar;
