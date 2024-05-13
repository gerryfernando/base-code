import PropTypes from "prop-types";
import { Grid, Stack } from "@mui/material";
import JdTextField from "../../../../../components/Field/JdTextField";
import JdDate from "../../../../../components/Field/JdDate";
import JdAutoComplete from "../../../../../components/Field/JdAutoComplete";
import JdTime from "../../../../../components/Field/JdTime";

const InformasiKejadianForm = ({ RHF }) => {
  const {
    formState: { errors },
  } = RHF;

  const provinsiOptions = [
    { value: "Jawa Barat", label: "Jawa Barat" },
    { value: "Jawa Timur", label: "Jawa Timur" },
    { value: "Jawa Tengah", label: "Jawa Tengah" },
  ];

  const kotaOptions = [
    { value: "Bandung", label: "Bandung" },
    { value: "Malang", label: "Malang" },
    { value: "Solo", label: "Solo" },
  ];

  return (
    <Grid container gap={{ xs: 2, lg: "unset" }}>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <JdDate
            col={6}
            name="tanggalKejadian"
            label="Tanggal Kejadian"
            rhf={RHF}
            helperText={
              errors?.tanggalKejadian ? errors?.tanggalKejadian?.message : ""
            }
            error={!!errors?.tanggalKejadian}
            required
          />
          <JdTime
            col={6}
            name="waktuKejadian"
            label="Waktu Kejadian"
            rhf={RHF}
            helperText={
              errors?.waktuKejadian ? errors?.waktuKejadian?.message : ""
            }
            error={!!errors?.waktuKejadian}
            required
          />
          <JdTextField
            rhf={RHF}
            name="lokasiKejadian"
            id="lokasiKejadian"
            label="Lokasi Kejadian"
            helperText={
              errors?.lokasiKejadian ? errors?.lokasiKejadian?.message : ""
            }
            error={!!errors?.lokasiKejadian}
            placeholder="Lokasi kejadian"
          />
          <JdAutoComplete
            rhf={RHF}
            label="Provinsi"
            name="provinsi"
            size="small"
            fullWidth
            placeholder="Kota"
            options={provinsiOptions}
            helperText={errors.provinsi ? errors.provinsi.message : ""}
            error={!!errors?.provinsi}
          />
        </Stack>
      </Grid>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <JdAutoComplete
            rhf={RHF}
            label="Kota"
            name="kota"
            size="small"
            fullWidth
            placeholder="Kota"
            options={kotaOptions}
            helperText={errors.kota ? errors.kota.message : ""}
            error={!!errors?.kota}
          />
          <JdTextField
            rhf={RHF}
            name="penyebabKerugian"
            id="penyebabKerugian"
            label="Penyebab Kerugian"
            helperText={
              errors?.penyebabKerugian ? errors?.penyebabKerugian?.message : ""
            }
            error={!!errors?.penyebabKerugian}
            placeholder="Penyebab kerugian"
          />
          <JdTextField
            rhf={RHF}
            required
            name="deskripsiKejadian"
            id="deskripsiKejadian"
            label="Deskripsi Kejadian"
            helperText={
              errors?.deskripsiKejadian
                ? errors?.deskripsiKejadian?.message
                : ""
            }
            error={!!errors?.deskripsiKejadian}
            placeholder="Deskripsi kejadian"
            isTextArea
            rows={4.6}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

InformasiKejadianForm.propTypes = {
  RHF: PropTypes.object.isRequired,
};

export default InformasiKejadianForm;
