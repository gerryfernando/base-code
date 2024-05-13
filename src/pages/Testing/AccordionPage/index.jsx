import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";
import JdAccordion from "../../../components/JdAccordion";
import { accordionItems } from "../../../const/dummydata";

const AccordionPage = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="100vh"
        width="100%"
      >
        <Box display="flex" alignItems="center">
          <Link to="/halaman-utama">
            <ArrowBackIos />
          </Link>
          <Typography fontSize={30} fontWeight={600}>
            JdAccordion
          </Typography>
        </Box>
        <JdAccordion data={accordionItems} />
      </Box>
    </Container>
  );
};

export default AccordionPage;
