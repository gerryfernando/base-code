import PropTypes from "prop-types";
import { Grid, Stack } from "@mui/material";
import JdTextField from "../../../../../components/Field/JdTextField";
import JdAutoComplete from "../../../../../components/Field/JdAutoComplete";

const DataPelaporForm = ({ RHF }) => {
  const {
    formState: { errors },
  } = RHF;

  const hubunganTertanggungPelaporOptions = [
    { value: "Ayah", label: "Ayah" },
    { value: "Ibu", label: "Ibu" },
    { value: "Saudara", label: "Saudara" },
    { value: "Kenalan", label: "Kenalan" },
  ];

  return (
    <Grid container gap={{ xs: 2, lg: "unset" }}>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <JdTextField
            rhf={RHF}
            name="namaPelapor"
            id="namaPelapor"
            label="Nama"
            helperText={errors?.namaPelapor ? errors?.namaPelapor?.message : ""}
            error={!!errors?.namaPelapor}
            placeholder="Nama pelapor"
            required
          />
          <JdTextField
            rhf={RHF}
            name="handphonePelapor"
            id="handphonePelapor"
            label="Handphone"
            helperText={
              errors?.handphonePelapor ? errors?.handphonePelapor?.message : ""
            }
            error={!!errors?.handphonePelapor}
            placeholder="No handphone pelapor"
            required
          />
        </Stack>
      </Grid>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <JdTextField
            rhf={RHF}
            name="emailPelapor"
            id="emailPelapor"
            label="Email"
            helperText={
              errors?.emailPelapor ? errors?.emailPelapor?.message : ""
            }
            error={!!errors?.emailPelapor}
            placeholder="Email pelapor"
            required
          />
          <JdAutoComplete
            rhf={RHF}
            label="Hubungan dengan Tertanggung"
            name="hubunganTertanggungPelapor"
            size="small"
            fullWidth
            required
            placeholder="Hubungan dengan Tertanggung"
            options={hubunganTertanggungPelaporOptions}
            helperText={
              errors.hubunganTertanggungPelapor
                ? errors.hubunganTertanggungPelapor.message
                : ""
            }
            error={!!errors?.hubunganTertanggungPelapor}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

DataPelaporForm.propTypes = {
  RHF: PropTypes.object.isRequired,
};

export default DataPelaporForm;
