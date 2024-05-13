import { Box } from "@mui/material";
import { useState } from "react";
import JdTabs from "../../../components/Tabs/JdTabs";
import { tabs } from "../../../const/dummydata";
import JdTabPanel from "../../../components/Tabs/JdTabPanel";

const TabsPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Box maxWidth="270px">
        <JdTabs tabs={tabs} onChange={handleTabChange} value={currentTab} />
      </Box>
      <JdTabPanel value={currentTab} index={0}>
        <h2>Tab 1 Content</h2>
        <p>This is the content of Tab 1.</p>
      </JdTabPanel>
      <JdTabPanel value={currentTab} index={1}>
        <h2>Tab 2 Content</h2>
        <p>This is the content of Tab 2.</p>
      </JdTabPanel>
      <JdTabPanel value={currentTab} index={2}>
        <h2>Tab 3 Content</h2>
        <p>This is the content of Tab 3.</p>
      </JdTabPanel>
    </div>
  );
};

export default TabsPage;
