import PropTypes from "prop-types";
import { Box, Grid, InputLabel, Stack } from "@mui/material";
import JdTextField from "../../../../../components/Field/JdTextField";
import JdDropDown from "../../../../../components/Field/JdDropDown";
import JdAutoComplete from "../../../../../components/Field/JdAutoComplete";
import JdDate from "../../../../../components/Field/JdDate";
import { useEffect } from "react";

const DataPengemudiForm = ({ RHF }) => {
  const {
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = RHF;

  const hubunganTertanggungPengemudiOptions = [
    { value: "Ayah", label: "Ayah" },
    { value: "Ibu", label: "Ibu" },
    { value: "Saudara", label: "Saudara" },
    { value: "Kenalan", label: "Kenalan" },
  ];

  const tipeSIMOptions = [
    { value: "Punya", label: "Punya" },
    { value: "Belum Punya", label: "Belum Punya" },
  ];

  const isSameNameOptions = [
    { value: "Sama", label: "Sama" },
    { value: "Tidak", label: "Tidak" },
  ];

  useEffect(() => {
    const isSameNameValue = getValues("isSameName");
    const namaTertanggungValue = getValues("namaTertanggung");

    if (isSameNameValue === "Sama") {
      setValue("namaPengemudi", namaTertanggungValue);
    } else {
      setValue("namaPengemudi", "");
    }

    trigger("namaPengemudi");
  }, [getValues, setValue]);

  return (
    <Grid container gap={{ xs: 2, lg: "unset" }}>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <Box>
            <InputLabel>Nama Sama dengan Tertanggung?</InputLabel>
            <Grid container>
              <Grid item xs={3}>
                <JdDropDown
                  rhf={RHF}
                  name="isSameName"
                  size="small"
                  fullWidth
                  options={isSameNameOptions}
                  placeholder="Pilih"
                  helperText={
                    errors.isSameName ? errors.isSameName.message : ""
                  }
                  error={!!errors?.isSameName}
                />
              </Grid>
              <Grid item xs={9} paddingLeft={1}>
                <JdTextField
                  rhf={RHF}
                  name="namaPengemudi"
                  fullWidth
                  helperText={
                    errors?.namaPengemudi ? errors?.namaPengemudi?.message : ""
                  }
                  error={!!errors?.namaPengemudi}
                  placeholder="Nama pengemudi"
                />
              </Grid>
            </Grid>
          </Box>
          <JdAutoComplete
            rhf={RHF}
            label="Hubungan dengan Tertanggung"
            name="hubunganTertanggungPengemudi"
            size="small"
            fullWidth
            placeholder="Hubungan dengan Tertanggung"
            options={hubunganTertanggungPengemudiOptions}
            helperText={
              errors.hubunganTertanggungPengemudi
                ? errors.hubunganTertanggungPengemudi.message
                : ""
            }
            error={!!errors?.hubunganTertanggungPengemudi}
          />
          <JdTextField
            rhf={RHF}
            name="handphonePengemudi"
            id="handphonePengemudi"
            label="Handphone"
            helperText={
              errors?.handphonePengemudi
                ? errors?.handphonePengemudi?.message
                : ""
            }
            error={!!errors?.handphonePengemudi}
            placeholder="No handphone pengemudi"
          />
          <JdDate
            name="lastDateSIM"
            label="Tanggal Akhir Berlaku SIM"
            rhf={RHF}
            helperText={errors?.lastDateSIM ? errors?.lastDateSIM?.message : ""}
            error={!!errors?.lastDateSIM}
          />
        </Stack>
      </Grid>
      <Grid item md={6} paddingX={{ lg: 1.5 }} xs={12}>
        <Stack gap={2}>
          <Box>
            <InputLabel>No SIM</InputLabel>
            <Grid container>
              <Grid item xs={3}>
                <JdDropDown
                  rhf={RHF}
                  name="tipeSIM"
                  size="small"
                  fullWidth
                  options={tipeSIMOptions}
                  placeholder="Pilih"
                  helperText={errors.tipeSIM ? errors.tipeSIM.message : ""}
                  error={!!errors?.tipeSIM}
                />
              </Grid>
              <Grid item xs={9} paddingLeft={1}>
                <JdTextField
                  rhf={RHF}
                  name="noSIM"
                  fullWidth
                  helperText={errors?.noSIM ? errors?.noSIM?.message : ""}
                  error={!!errors?.noSIM}
                  placeholder="No SIM"
                />
              </Grid>
            </Grid>
          </Box>
          <JdTextField
            rhf={RHF}
            name="alamatPengemudi"
            label="Alamat"
            helperText={
              errors?.alamatPengemudi ? errors?.alamatPengemudi?.message : ""
            }
            error={!!errors?.alamatPengemudi}
            placeholder="Alamat pengemudi"
            isTextArea
            rows={4.6}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

DataPengemudiForm.propTypes = {
  RHF: PropTypes.object.isRequired,
};

export default DataPengemudiForm;
