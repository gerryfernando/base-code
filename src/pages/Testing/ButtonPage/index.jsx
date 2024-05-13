import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import JdButton from "../../../components/JdButton";
import { ArrowBackIos, Edit } from "@mui/icons-material";

const ButtonPage = () => {
  const handleClick = () => {
    console.log("Tombol diklik!");
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box display="flex" alignItems="center">
          <Link to="/halaman-utama">
            <ArrowBackIos />
          </Link>
          <Typography fontSize={30} fontWeight={600}>
            JdButton
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <JdButton onClick={handleClick} disableRipple>
            Default
          </JdButton>
          <JdButton onClick={handleClick} disableRipple loading>
            With loading
          </JdButton>
          <JdButton
            onClick={handleClick}
            disableRipple
            bgcolor="#FFB302"
            fontcolor="white"
          >
            With Custom Color
          </JdButton>
          <JdButton
            onClick={handleClick}
            variant="text"
            fontcolor="#004271"
            disableRipple
          >
            Text Button
          </JdButton>
          <JdButton variant="outlined">Outlined Button</JdButton>
          <JdButton
            border="5px solid #FFB302"
            fontcolor="#FFB302"
            variant="outlined"
          >
            Outlined Button (with custom border)
          </JdButton>
          <JdButton
            onClick={handleClick}
            radius={20}
            bgcolor="#FFB302"
            disableRipple
            fontcolor="white"
          >
            With Custom Radius
          </JdButton>
          <JdButton
            onClick={handleClick}
            size="large"
            disableRipple
            fontcolor="white"
          >
            With Custom Size
          </JdButton>
          <JdButton onClick={handleClick} bgcolor="#FFB302" fontcolor="white">
            Without Disable Ripple
          </JdButton>
          <JdButton onClick={handleClick} disabled={true}>
            Disabled Button
          </JdButton>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <JdButton variant="icon" onClick={() => alert("Default")}>
            <Edit />
          </JdButton>
          <JdButton
            onClick={() => alert("With Custom BGColor and FontColor")}
            variant="icon"
            bgcolor="#32BEA6"
            fontcolor="#ffffff"
          >
            <Edit />
          </JdButton>
          <JdButton
            onClick={() => alert("With Custom Size and Radius")}
            bgcolor="#FC0005"
            fontcolor="#ffffff"
            variant="icon"
            size="large"
            radius={5}
          >
            <Edit />
          </JdButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ButtonPage;
