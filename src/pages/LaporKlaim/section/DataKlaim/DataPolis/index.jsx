import PropTypes from "prop-types";
import { Box, Grid, InputLabel, Stack } from "@mui/material";
import JdTextField from "../../../../../components/Field/JdTextField";
import JdDropDown from "../../../../../components/Field/JdDropDown";
import JdDate from "../../../../../components/Field/JdDate";

const DataPolisForm = ({ RHF }) => {
  const {
    formState: { errors },
  } = RHF;

  const GenderList = [
    { value: "L", label: "Laki-laki" },
    { value: "P", label: "Perempuan" },
  ];

  const nomorRangkaOptions = [
    { value: "RDAU171522FAP05", label: "RDAU171522FAP05" },
  ];

  return (
    <Grid container gap={{ xs: 2, lg: "unset" }}>
      <Grid item md={6} paddingX={1.5} xs={12}>
        <Stack gap={2}>
          <JdTextField
            rhf={RHF}
            name="namaTertanggung"
            id="namaTertanggung"
            label="Nama Tertanggung"
            helperText={
              errors?.namaTertanggung ? errors?.namaTertanggung?.message : ""
            }
            error={!!errors?.namaTertanggung}
            placeholder="Contoh: John Doe"
            disabled
          />
          <JdDropDown
            rhf={RHF}
            name="jenisKelamin"
            label="Jenis Kelamin"
            size="small"
            fullWidth
            options={GenderList}
            disabled
            placeholder="Pilih Jenis Kelamin"
            helperText={errors.jenisKelamin ? errors.jenisKelamin.message : ""}
            error={!!errors?.jenisKelamin}
          />
          <JdTextField
            rhf={RHF}
            name="handphone"
            id="handphone"
            label="Handphone"
            helperText={errors?.handphone ? errors?.handphone?.message : ""}
            error={!!errors?.handphone}
            placeholder="Contoh: 081234567890"
            required
          />
          <JdTextField
            rhf={RHF}
            name="nomorPolis"
            id="nomorPolis"
            label="Nomor Polis"
            helperText={errors?.nomorPolis ? errors?.nomorPolis?.message : ""}
            error={!!errors?.nomorPolis}
            placeholder="Nomor Polis"
            disabled
          />
          <Box>
            <InputLabel>Periode Polis</InputLabel>
            <Box display="flex" justifyContent="center" alignItems="center">
              <JdDate
                name="startPeriodePolis"
                rhf={RHF}
                helperText={
                  errors?.startPeriodePolis
                    ? errors?.startPeriodePolis?.message
                    : ""
                }
                error={!!errors?.startPeriodePolis}
                disabled
              />
              <Box
                sx={{
                  border: "1px solid #000000",
                  width: "15px",
                  marginX: 1.5,
                }}
              />
              <JdDate
                name="endPeriodePolis"
                rhf={RHF}
                helperText={
                  errors?.endPeriodePolis
                    ? errors?.endPeriodePolis?.message
                    : ""
                }
                error={!!errors?.endPeriodePolis}
                disabled
              />
            </Box>
          </Box>
          <JdTextField
            rhf={RHF}
            name="email"
            id="email"
            label="Email"
            helperText={errors?.email ? errors?.email?.message : ""}
            error={!!errors?.email}
            placeholder="Contoh: example@example.com"
            required
          />
          <JdTextField
            rhf={RHF}
            name="alamat"
            id="alamat"
            label="Alamat"
            helperText={errors?.alamat ? errors?.alamat?.message : ""}
            error={!!errors?.alamat}
            placeholder="Contoh: Jl. Contoh No. 123"
            isTextArea
            rows={4.6}
            disabled
          />
        </Stack>
      </Grid>
      <Grid item md={6} paddingX={1.5} xs={12}>
        <Stack gap={2}>
          <JdDropDown
            rhf={RHF}
            name="nomorRangka"
            label="Nomor Rangka"
            size="small"
            fullWidth
            options={nomorRangkaOptions}
            disabled
            placeholder="Pilih Nomor Rangka"
            helperText={errors.nomorRangka ? errors.nomorRangka.message : ""}
            error={!!errors.nomorRangka}
          />
          <JdTextField
            rhf={RHF}
            name="objekPertanggungan"
            id="objekPertanggungan"
            label="Objek Pertanggungan"
            helperText={
              errors?.objekPertanggungan
                ? errors?.objekPertanggungan?.message
                : ""
            }
            error={!!errors?.objekPertanggungan}
            placeholder="Contoh: RDAU171522FAP05"
            disabled
          />
          <JdTextField
            rhf={RHF}
            name="jenisKendaraan"
            id="jenisKendaraan"
            label="Jenis Kendaraan"
            helperText={
              errors?.jenisKendaraan ? errors?.jenisKendaraan?.message : ""
            }
            error={!!errors?.jenisKendaraan}
            placeholder="Contoh: Sedan"
            disabled
          />
          <JdTextField
            rhf={RHF}
            name="tahunPembuatan"
            id="tahunPembuatan"
            label="Tahun Pembuatan"
            helperText={
              errors?.tahunPembuatan ? errors?.tahunPembuatan?.message : ""
            }
            error={!!errors?.tahunPembuatan}
            placeholder="Contoh: 2022"
            disabled
          />
          <JdTextField
            rhf={RHF}
            name="nomorPolisi"
            id="nomorPolisi"
            label="Nomor Polisi"
            helperText={errors?.nomorPolisi ? errors?.nomorPolisi?.message : ""}
            error={!!errors?.nomorPolisi}
            placeholder="Nomor Polisi"
            disabled
          />
          <JdTextField
            rhf={RHF}
            name="merkKendaraan"
            id="merkKendaraan"
            label="Merk Kendaraan"
            helperText={
              errors?.merkKendaraan ? errors?.merkKendaraan?.message : ""
            }
            error={!!errors?.merkKendaraan}
            placeholder="Merk Kendaraan"
            disabled
          />
          <JdTextField
            rhf={RHF}
            name="warnaKendaraan"
            id="warnaKendaraan"
            label="Warna Kendaraan"
            helperText={
              errors?.warnaKendaraan ? errors?.warnaKendaraan?.message : ""
            }
            error={!!errors?.warnaKendaraan}
            placeholder="Warna Kendaraan"
            disabled
          />
          <JdTextField
            rhf={RHF}
            name="nomorMesin"
            id="nomorMesin"
            label="Nomor Mesin"
            helperText={errors?.nomorMesin ? errors?.nomorMesin?.message : ""}
            error={!!errors?.nomorMesin}
            placeholder="Nomor Mesin"
            disabled
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

DataPolisForm.propTypes = {
  RHF: PropTypes.object.isRequired,
};

export default DataPolisForm;
