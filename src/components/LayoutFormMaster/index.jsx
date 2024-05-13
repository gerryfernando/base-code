import { Box, Grid, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import JdTypography from "../JdTypography";
import JdButton from "../JdButton";
import JdTabs from "../Tabs/JdTabs";
import JdTabPanel from "../Tabs/JdTabPanel";

const LayoutFormMaster = (props) => {
  const { onSubmitForm, RHF, idForm, children, onCancel, loading, title } =
    props;
  const { handleSubmit } = RHF;

  const [currentTab] = useState(0);

  return (
    <Grid container rowSpacing="60px">
      <Grid item xs={12}>
        <JdTypography title>{title}</JdTypography>
      </Grid>
      <Grid item xs={12}>
        <div>
          <Box maxWidth="120px">
            <JdTabs tabs={[{ label: "Data User" }]} value={currentTab} />
          </Box>
          <JdTabPanel value={currentTab} index={0}>
            <Box justifyContent="center">
              <FormProvider {...RHF}>
                <form id={idForm} onSubmit={handleSubmit(onSubmitForm)}>
                  <Grid
                    container
                    display="flex"
                    justifyContent="center"
                    spacing={2}
                  >
                    {children}
                    <Grid
                      display="flex"
                      justifyContent={{ xs: "center", sm: "end" }}
                      item
                      xs={12}
                      mt={5}
                    >
                      <Stack
                        sx={{ width: { xs: "100%", sm: "auto" } }}
                        direction={{ xs: "column", sm: "row" }}
                        spacing={3}
                      >
                        <JdButton
                          onClick={onCancel}
                          loading={loading}
                          size="large"
                          fullWidth
                          variant="outlined"
                        >
                          Cancel
                        </JdButton>
                        <JdButton
                          loading={loading}
                          fontcolor="#ffffff"
                          size="large"
                          fullWidth
                          type="submit"
                        >
                          Simpan
                        </JdButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </form>
              </FormProvider>
            </Box>
          </JdTabPanel>
        </div>
      </Grid>
    </Grid>
  );
};

LayoutFormMaster.propTypes = {
  RHF: PropTypes.any,
  onSubmitForm: PropTypes.func,
  children: PropTypes.node,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
  idForm: PropTypes.string,
  title: PropTypes.string,
};

export default LayoutFormMaster;
