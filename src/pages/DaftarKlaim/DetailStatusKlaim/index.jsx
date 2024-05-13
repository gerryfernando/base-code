import { Box, Grid } from "@mui/material";
import { useState } from "react";
import JdTypography from "../../../components/JdTypography";
import JdTabPanel from "../../../components/Tabs/JdTabPanel";
import JdTabs from "../../../components/Tabs/JdTabs";
import DataKlaimSection from "./DataKlaim";

const DetailStatusKlaim = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const daftarKlaimTabs = [
    { label: "Status Persetujuan Klaim" },
    { label: "Data Klaim" },
    { label: "Data Survey" },
    { label: "Lampiran" },
    { label: "Sumarry" },
  ];
  return (
    <Grid container>
      <Grid item xs={12} marginBottom={3}>
        <JdTypography title>Detail Status Klaim</JdTypography>
      </Grid>
      <Grid item xs={12} marginTop={7} paddingX={10}>
        <Box maxWidth="fit-content">
          <JdTabs
            tabs={daftarKlaimTabs}
            onChange={handleTabChange}
            value={currentTab}
          />
        </Box>
        <JdTabPanel value={currentTab} index={0}>
          <h2>Status Persetujuan Klaim</h2>
          <p>This is the content</p>
        </JdTabPanel>
        <JdTabPanel value={currentTab} index={1}>
          <DataKlaimSection />
        </JdTabPanel>
        <JdTabPanel value={currentTab} index={2}>
          <h2>Data Survey</h2>
          <p>This is the content</p>
        </JdTabPanel>
        <JdTabPanel value={currentTab} index={3}>
          <h2>Lampiran</h2>
          <p>This is the content</p>
        </JdTabPanel>
        <JdTabPanel value={currentTab} index={4}>
          <h2>Summary</h2>
          <p>This is the content</p>
        </JdTabPanel>
      </Grid>
    </Grid>
  );
};

export default DetailStatusKlaim;
