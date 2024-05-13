import { Box, Grid, InputLabel, Stack } from "@mui/material";
import JdTextField from "../../../../../components/Field/JdTextField";
import PropTypes from "prop-types";
import JdDropDown from "../../../../../components/Field/JdDropDown";
import JdDate from "../../../../../components/Field/JdDate";
import { useState } from "react";

const DataKlaimForm = (props) => {
  const { RHF } = props;
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = useState(true);
  const {
    formState: { errors },
  } = RHF;

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} paddingX={1.5}>
        <Stack spacing="15px">
          <JdTextField
            rhf={RHF}
            name="namaTertanggung"
            id="namaTertanggung"
            label="Nama Tertanggung"
            helperText={
              errors?.namaTertanggung ? errors?.namaTertanggung?.message : ""
            }
            error={!!errors?.namaTertanggung}
            placeholder="Nama Tertanggung"
            required
            disabled={disabled}
          />
          <JdDropDown
            name="dropdown"
            rhf={RHF}
            label="Drop Down"
            size="small"
            fullWidth
            options={[
              { value: "male", label: "Laki-Laki" },
              { value: "female", label: "Perempuan" },
            ]}
            required
            disabled={disabled}
            placeholder="Select..."
            helperText={errors.dropdown ? errors.dropdown.message : ""}
            error={!!errors?.dropdown}
          />
          <JdTextField
            rhf={RHF}
            name="noHp"
            id="noHp"
            label="Handphone"
            helperText={errors?.noHp ? errors?.noHp?.message : ""}
            error={!!errors?.noHp}
            placeholder="Handphone"
            required
            disabled={disabled}
          />
          <JdTextField
            rhf={RHF}
            name="noPolis"
            id="noPolis"
            label="Nomor Polis"
            helperText={errors?.noPolis ? errors?.noPolis?.message : ""}
            error={!!errors?.noPolis}
            placeholder="Nomor Polis"
            required
            disabled={disabled}
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
            placeholder="Email"
            required
            disabled={disabled}
          />
          <JdTextField
            rhf={RHF}
            name="alamat"
            id="alamat"
            label="Alamat"
            helperText={errors?.alamat ? errors?.alamat?.message : ""}
            error={!!errors?.alamat}
            placeholder="Alamat"
            required
            disabled={disabled}
            rows={4}
            isTextArea
          />
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={6} paddingX={1.5}>
        <Stack spacing="15px">
          <JdTextField
            rhf={RHF}
            name="noRangka"
            id="noRangka"
            label="No Rangka"
            helperText={errors?.noRangka ? errors?.noRangka?.message : ""}
            error={!!errors?.noRangka}
            placeholder="No Rangka"
            required
            disabled={disabled}
          />
          <JdTextField
            rhf={RHF}
            name="objekPertanggungan"
            id="objekPertanggungan"
            label="Objeck Pertanggungan"
            helperText={
              errors?.objekPertanggungan
                ? errors?.objekPertanggungan?.message
                : ""
            }
            error={!!errors?.objekPertanggungan}
            placeholder="Objeck Pertanggungan"
            required
            disabled={disabled}
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
            placeholder="Jenis Kendaraan"
            required
            disabled={disabled}
          />
          <JdTextField
            rhf={RHF}
            name="year"
            id="year"
            label="Tahun Pembuatan"
            helperText={errors?.year ? errors?.year?.message : ""}
            error={!!errors?.year}
            placeholder="Tahun Pembuatan"
            required
            disabled={disabled}
            type="number"
          />
          <JdTextField
            rhf={RHF}
            name="noPolisi"
            id="noPolisi"
            label="No Polisi"
            helperText={errors?.noPolisi ? errors?.noPolisi?.message : ""}
            error={!!errors?.noPolisi}
            placeholder="No Polisi"
            required
            disabled={disabled}
          />
          <JdTextField
            rhf={RHF}
            name="merk"
            id="merk"
            label="Merk Kendaraan"
            helperText={errors?.merk ? errors?.merk?.message : ""}
            error={!!errors?.merk}
            placeholder="Merk Kendaraan"
            required
            disabled={disabled}
          />
          <JdTextField
            rhf={RHF}
            name="warna"
            id="warna"
            label="Warna Kendaraan"
            helperText={errors?.warna ? errors?.warna?.message : ""}
            error={!!errors?.warna}
            placeholder="Warna Kendaraan"
            required
            disabled={disabled}
          />
          <JdTextField
            rhf={RHF}
            name="noMesin"
            id="noMesin"
            label="Nomor Mesin"
            helperText={errors?.noMesin ? errors?.noMesin?.message : ""}
            error={!!errors?.noMesin}
            placeholder="Nomor Mesin"
            required
            disabled={disabled}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};
DataKlaimForm.propTypes = {
  RHF: PropTypes.any,
};
export default DataKlaimForm;
