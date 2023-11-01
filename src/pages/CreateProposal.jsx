import Navbar from "../components/Navbar";
import ProposalForm from "../components/ProposalForm";
import ProjectForm from "../components/ProjectForm";
import { Typography, Tab, Box } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { useState } from "react";

export default function CreateProposal() {
   const [value, setValue] = useState("1");

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <>
         <Navbar />
         <Typography
            variant="h5"
            sx={{ marginTop: "100px", textAlign: "center" }}
         >
            Create A Proposal
         </Typography>
         <Box sx={{ marginTop: "10px" }}>
            <TabContext value={value}>
               <Box sx={{ borderBottom: "1px", borderColor: "secondary" }}>
                  <TabList onChange={handleChange} centered>
                     <Tab label="Governance Proposals" value="1" />
                     <Tab label="Project Proposals" value="2" />
                  </TabList>
               </Box>
               <TabPanel value="1">
                  <ProposalForm />
               </TabPanel>
               <TabPanel value="2">
                  <ProjectForm />
               </TabPanel>
            </TabContext>
         </Box>
      </>
   );
}
