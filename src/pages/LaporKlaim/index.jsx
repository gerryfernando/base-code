import { useState } from "react";
import { Box, Grid, Stack, TextField } from "@mui/material";
import JdTypography from "../../components/JdTypography";
import { useTheme } from "@emotion/react";
import JdButton from "../../components/JdButton";
import { useForm } from "react-hook-form";
import { FORMAT_DATE_DEFAULT } from "../../const/TimeFormat";
import moment from "moment";
import JdTabs from "../../components/Tabs/JdTabs";
import JdTabPanel from "../../components/Tabs/JdTabPanel";
import { laporKlaimTabs } from "../../const/dummydata";
import DataKlaimSection from "./section/DataKlaim";

const LaporKlaimPage = () => {
  const theme = useTheme();

  const RHF = useForm();
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = RHF;

  const [searchType, setSearchType] = useState("No Rangka");
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleButtonClick = (buttonName) => {
    setSearchType(buttonName);
  };

  const onSubmitFindPolis = (data) => {
    console.log(data, moment(getValues("date")).format(FORMAT_DATE_DEFAULT));
    setLoading(true);
  };

  const getButtonProps = (buttonName) => ({
    bgcolor: searchType === buttonName ? theme.palette.secondary.main : "white",
    fontcolor:
      searchType === buttonName ? "white" : theme.palette.secondary.main,
    onClick: () => handleButtonClick(buttonName),
    disableRipple: true,
    sx: {
      "&:hover": {
        backgroundColor: searchType !== buttonName && "white",
      },
    },
  });

  const buttonData = [
    { name: "No Rangka", label: "No Rangka" },
    { name: "No Polis", label: "No Polis" },
  ];

  return (
    <Grid container>
      <Grid item xs={12} marginBottom={3}>
        <Stack>
          <JdTypography bold fontSize="28px" title>
            Lapor Klaim
          </JdTypography>
        </Stack>
      </Grid>
      <Grid item lg={2.5} xs={12}>
        <Stack gap={0.5}>
          <JdTypography small>Tipe Pencarian</JdTypography>
          <Box
            borderRadius="12px"
            width="fit-content"
            sx={{ border: `0.3px solid ${theme.palette.border.main}` }}
          >
            {buttonData.map((button) => (
              <JdButton key={button.name} {...getButtonProps(button.name)}>
                {button.label}
              </JdButton>
            ))}
          </Box>
        </Stack>
      </Grid>
      <Grid item lg={9.5} xs={12} marginTop={{ xs: 2, lg: 0 }}>
        <Stack gap={0.5}>
          <JdTypography small>
            {searchType}
            <span style={{ color: "red" }}>*</span>
          </JdTypography>
          <form onSubmit={handleSubmit(onSubmitFindPolis)}>
            <Box
              display="flex"
              gap={{ xs: 1, sm: 2 }}
              alignItems="start"
              flexDirection={{ xs: "column", sm: "row-reverse", lg: "unset" }}
              justifyContent={{ xs: "start", lg: "unset" }}
            >
              <TextField
                fullWidth
                sx={{ width: { xs: "332px", sm: "unset" } }}
                size="small"
                placeholder="XXK78SHA051722"
                {...register("searchType", {
                  required: `${searchType} + is required`,
                })}
                error={!!errors.searchType}
                helperText={errors.searchType ? errors.searchType.message : ""}
              />
              <JdButton
                type="submit"
                loading={loading}
                fontcolor="#fff"
                sx={{ width: { xs: "100%", sm: "fit-content" } }}
              >
                Cari Polis
              </JdButton>
            </Box>
          </form>
          <JdTypography small semiBold color={theme.palette.text.grey}>
            Cari Polis terlebih dahulu menggunakan Nomor Rangka/Polis Kendaraan
            Bermotor anda.
          </JdTypography>
        </Stack>
      </Grid>
      <Grid item xs={12} marginTop={7} paddingX={{ lg: 10 }}>
        <Box maxWidth="fit-content">
          <JdTabs
            tabs={laporKlaimTabs}
            onChange={handleTabChange}
            value={currentTab}
          />
        </Box>
        <JdTabPanel value={currentTab} index={0}>
          <DataKlaimSection />
        </JdTabPanel>
        <JdTabPanel value={currentTab} index={1}>
          <h2>Tab 2 Content</h2>
          <p>This is the content of Tab 2.</p>
        </JdTabPanel>
        <JdTabPanel value={currentTab} index={2}>
          <h2>Tab 3 Content</h2>
          <p>This is the content of Tab 3.</p>
        </JdTabPanel>
      </Grid>
    </Grid>
  );
};

export default LaporKlaimPage;
