import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { dataKlaimSteps } from "../../../../const/dummydata";
import JdStepper from "../../../../components/JdStepper";
import JdButton from "../../../../components/JdButton";
import { useForm } from "react-hook-form";
import DataPolisForm from "./DataPolis";
import DataPelaporForm from "./DataPelapor";
import DataPengemudiForm from "./DataPengemudi";
import InformasiKlaimForm from "./InformasiKlaim";
import InformasiKejadianForm from "./InformasiKejadian";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 20,
  paddingBottom: 20,
  gap: 40,
});

const DataKlaimSection = () => {
  const RHF = useForm();
  const { setValue } = RHF;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep !== dataKlaimSteps.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBefore = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  useEffect(() => {
    const defaultValues = {
      namaTertanggung: "ROBERTUS DWI ARI UTOMO",
      jenisKelamin: "L",
      handphone: "0895396000041",
      nomorPolis: "201.601.700.22.00294/700/000",
      startPeriodePolis: "09/17/2023",
      endPeriodePolis: "09/17/2024",
      email: "robertus.dwi@asuransijasindo.co.id",
      alamat: "Jl Menteng Raya",
      nomorRangka: "RDAU171522FAP05",
      objekPertanggungan: "Toyota Fortuner 2.5 G AT",
      jenisKendaraan: "Angkutan Penumpang",
      tahunPembuatan: "2020",
      nomorPolisi: "N 7590 CV",
      merkKendaraan: "Honda",
      warnaKendaraan: "Putih",
      nomorMesin: "JFZ1E2881129",
      isSameName: "Tidak",
    };

    Object.entries(defaultValues).forEach(([fieldName, value]) => {
      setValue(fieldName, value);
    });
  }, [setValue]);

  return (
    <CenteredContainer>
      <Box width={{ lg: "60%" }}>
        <JdStepper steps={dataKlaimSteps} activeStep={activeStep} />
      </Box>
      {activeStep === 0 && <DataPolisForm RHF={RHF} />}
      {activeStep === 1 && <DataPelaporForm RHF={RHF} />}
      {activeStep === 2 && <DataPengemudiForm RHF={RHF} />}
      {activeStep === 3 && <InformasiKejadianForm RHF={RHF} />}
      {activeStep === 4 && <InformasiKlaimForm RHF={RHF} />}
      <Box
        display="flex"
        justifyContent={activeStep === 0 ? "end" : "space-between"}
        alignItems="center"
        width="98%"
      >
        {activeStep !== 0 && (
          <JdButton
            sx={{ fontWeight: 600, paddingX: 4, paddingY: 0.5 }}
            variant="outlined"
            onClick={handleBefore}
          >
            Kembali
          </JdButton>
        )}
        <JdButton
          sx={{ fontWeight: 600, paddingX: 4, paddingY: 0.5 }}
          onClick={handleNext}
          fontcolor="#fff"
        >
          Berikutnya
        </JdButton>
      </Box>
    </CenteredContainer>
  );
};

export default DataKlaimSection;
