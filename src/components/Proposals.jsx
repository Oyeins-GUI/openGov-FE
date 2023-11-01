import { Tab, Box } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import GetProposals from "./GetProposals";
import { useState } from "react";

export default function Proposals() {
   const [value, setValue] = useState("1");

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box sx={{ marginTop: "30px" }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: "1px", borderColor: "secondary" }}>
               <TabList onChange={handleChange} centered>
                  <Tab label="Governance Proposals" value="1" />
                  <Tab label="Project Proposals" value="2" />
               </TabList>
            </Box>
            <TabPanel value="1">
               <GetProposals />
            </TabPanel>
            <TabPanel value="2">Project proposals with be listed here</TabPanel>
         </TabContext>
      </Box>
   );
}
