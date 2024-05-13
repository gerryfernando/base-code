import PropTypes from "prop-types";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import assets from "../../assets";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const CenteredImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
});

const NotFound = ({ message = "Tidak ada data" }) => {
  return (
    <CenteredContainer>
      <CenteredImage
        src={assets.images.notFound}
        alt="Tidak ditemukan"
        loading="lazy"
      />
      <Typography fontWeight={800} fontSize={30} gutterBottom>
        {message}
      </Typography>
    </CenteredContainer>
  );
};

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotFound;
