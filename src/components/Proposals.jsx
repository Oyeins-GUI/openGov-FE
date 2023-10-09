import { Typography } from "@mui/material";
import GetProposals from "./GetProposals";

export default function Proposals() {
   return (
      <>
         <Typography
            variant="h4"
            sx={{
               marginTop: "80px",
               marginBottom: "10px",
               textAlign: "center",
            }}
         >
            Proposal
         </Typography>
         <GetProposals />
      </>
   );
}
