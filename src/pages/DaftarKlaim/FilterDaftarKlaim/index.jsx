import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import JdTextField from "../../../components/Field/JdTextField";
import JdDate from "../../../components/Field/JdDate";

const FilterDaftarKlaim = (props) => {
  const { RHF } = props;
  const {
    formState: { errors },
  } = RHF;

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JdTextField
          rhf={RHF}
          name="noPolis"
          id="noPolis"
          label="No Polis"
          helperText={errors?.noPolis ? errors?.noPolis?.message : ""}
          error={!!errors?.noPolis}
          placeholder="No Polis"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JdTextField
          rhf={RHF}
          name="noKlaim"
          id="noKlaim"
          label="No Registrasi Klaim"
          helperText={errors?.noKlaim ? errors?.noKlaim?.message : ""}
          error={!!errors?.noKlaim}
          placeholder="No Registrasi Klaim"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JdTextField
          rhf={RHF}
          name="noRangka"
          id="noRangka"
          label="No Rangka"
          helperText={errors?.noRangka ? errors?.noRangka?.message : ""}
          error={!!errors?.noRangka}
          placeholder="No Rangka"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
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
          placeholder="Objek Pertanggungan"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JdDate
          col={6}
          name="tglLaporan"
          label="Tanggal Laporan"
          rhf={RHF}
          helperText={errors?.tglLaporan ? errors?.tglLaporan?.message : ""}
          error={!!errors?.tglLaporan}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JdDate
          col={6}
          name="tglKejadian"
          label="Tanggal Kejadian"
          rhf={RHF}
          helperText={errors?.tglKejadian ? errors?.tglKejadian?.message : ""}
          error={!!errors?.tglKejadian}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JdTextField
          rhf={RHF}
          name="statKlaim"
          id="statKlaim"
          label="Status Klaim"
          helperText={errors?.statKlaim ? errors?.statKlaim?.message : ""}
          error={!!errors?.statKlaim}
          placeholder="Status Klaim"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
    </>
  );
};

FilterDaftarKlaim.propTypes = {
  RHF: PropTypes.any,
};
export default FilterDaftarKlaim;
