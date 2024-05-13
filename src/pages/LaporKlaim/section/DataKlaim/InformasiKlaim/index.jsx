import PropTypes from "prop-types";
import { Grid, Stack } from "@mui/material";
import JdTextField from "../../../../../components/Field/JdTextField";
import JdDropDown from "../../../../../components/Field/JdDropDown";
import JdAutoComplete from "../../../../../components/Field/JdAutoComplete";

const InformasiKlaimForm = ({ RHF }) => {
  const {
    formState: { errors },
  } = RHF;

  const nomorBankOptions = [
    { value: "BNI", label: "BNI" },
    { value: "BRI", label: "BRI" },
    { value: "Mandiri", label: "Mandiri" },
    { value: "BCA", label: "BCA" },
  ];

  const namaBengkelOptions = [
    { value: "Auto 2000", label: "Auto 2000" },
    { value: "Automaster", label: "Automaster" },
    { value: "CBS", label: "CBS" },
    { value: "Indoprima", label: "Indoprima" },
  ];

  const tipeKlaimOptions = [
    { value: "Full", label: "Full" },
    { value: "Spare Part", label: "Spare Part" },
    { value: "Repair", label: "Repair" },
  ];

  return (
    <Grid container gap={{ xs: 2, lg: "unset" }}>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <JdDropDown
            rhf={RHF}
            name="tipeKlaim"
            label="Tipe Klaim"
            size="small"
            fullWidth
            options={tipeKlaimOptions}
            placeholder="Pilih"
            helperText={errors.tipeKlaim ? errors.tipeKlaim.message : ""}
            error={!!errors?.tipeKlaim}
          />
          <JdAutoComplete
            rhf={RHF}
            label="Nama Bengkel"
            name="namaBengkel"
            size="small"
            fullWidth
            placeholder="Nama Bengkel"
            options={namaBengkelOptions}
            helperText={errors.namaBengkel ? errors.namaBengkel.message : ""}
            error={!!errors?.namaBengkel}
          />
        </Stack>
      </Grid>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <JdAutoComplete
            rhf={RHF}
            label="Nama Bank"
            name="namaBank"
            size="small"
            fullWidth
            placeholder="Nama Bank"
            options={nomorBankOptions}
            helperText={errors.namaBank ? errors.namaBank.message : ""}
            error={!!errors?.namaBank}
          />
          <JdTextField
            rhf={RHF}
            name="nomorRekening"
            id="nomorRekening"
            label="Nomor Rekening"
            helperText={
              errors?.nomorRekening ? errors?.nomorRekening?.message : ""
            }
            error={!!errors?.nomorRekening}
            placeholder="1123477919423"
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

InformasiKlaimForm.propTypes = {
  RHF: PropTypes.object.isRequired,
};

export default InformasiKlaimForm;
