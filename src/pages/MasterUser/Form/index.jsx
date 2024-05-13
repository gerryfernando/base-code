import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import JdAutoComplete from "../../../components/Field/JdAutoComplete";
import JdTextField from "../../../components/Field/JdTextField";

const FormMasterUser = (props) => {
  const { RHF, optionsRole, optionsBengkel } = props;
  const {
    formState: { errors },
    watch,
  } = RHF;

  return (
    <>
      <Grid item xs={12} md={6}>
        <JdTextField
          rhf={RHF}
          id="fullName"
          name="fullName"
          label="Text Area Field"
          helperText={errors?.fullName ? errors?.fullName?.message : ""}
          error={!!errors?.fullName}
          placeholder="Nama Lengkap"
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <JdTextField
          rhf={RHF}
          id="email"
          name="email"
          label="Text Area Field"
          helperText={errors?.email ? errors?.email?.message : ""}
          error={!!errors?.email}
          placeholder="Email"
          required
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <JdAutoComplete
          rhf={RHF}
          id="role"
          label="Role"
          name="role"
          size="small"
          fullWidth
          placeholder="Pilih Role"
          options={optionsRole}
          required
          helperText={errors.role ? errors.role.message : ""}
          error={!!errors?.role}
        />
      </Grid>
      <Grid
        sx={{ display: watch("role")?.includes("surveyor") ? "" : "none" }}
        item
        xs={12}
        md={6}
      >
        <JdAutoComplete
          rhf={RHF}
          id="bengkel"
          label="Bengkel"
          name="bengkel"
          size="small"
          fullWidth
          placeholder="Pilih Bengkel"
          options={optionsBengkel}
          required={watch("role")?.includes("surveyor") ? true : false}
          helperText={errors.bengkel ? errors.bengkel.message : ""}
          error={!!errors?.bengkel}
        />
      </Grid>
      <Grid
        sx={{ display: watch("role")?.includes("surveyor") ? "" : "none" }}
        item
        xs={12}
        md={6}
      >
        <JdAutoComplete
          rhf={RHF}
          id="surveyor"
          label="Surveyor"
          name="surveyor"
          size="small"
          fullWidth
          placeholder="Pilih Surveyor"
          options={optionsBengkel}
          required={watch("role")?.includes("surveyor") ? true : false}
          helperText={errors.surveyor ? errors.surveyor.message : ""}
          error={!!errors?.surveyor}
        />
      </Grid>
      <Grid item xs={12} md={6} />
    </>
  );
};

FormMasterUser.propTypes = {
  RHF: PropTypes.any,
  optionsBengkel: PropTypes.array,
  optionsRole: PropTypes.array,
};
export default FormMasterUser;
