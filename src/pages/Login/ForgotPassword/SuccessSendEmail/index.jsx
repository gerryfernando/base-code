import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import JdTypography from "../../../../components/JdTypography";
import assets from "../../../../assets";
import JdButton from "../../../../components/JdButton";

const SuccessSendEmailSection = () => {
  return (
    <Stack spacing={5}>
      <JdTypography bold fontSize="28px" textAlign="center">
        Lupa Password
      </JdTypography>
      <Stack gap={2}>
        <Box
          paddingX={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <motion.img
            src={assets.images.success}
            alt="success icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: [0.5, 1.2, 1],
              transition: { duration: 0.5 },
            }}
            loading="lazy"
          />
        </Box>

        <JdTypography small textAlign="center">
          Periksa email Anda dan buka tautan yang kami kirimkan untuk
          melanjutkan.
        </JdTypography>
        <Box paddingX={4} marginTop={2} display="flex" justifyContent="center">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <JdButton fontcolor="white">Kembali</JdButton>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SuccessSendEmailSection;
