import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userSession } from "./ConnectWallet";

export default function NavTabs() {
   const [value, setValue] = useState();
   const signedIn = userSession.isUserSignedIn();

   return (
      <Tabs
         textColor="inherit"
         value={value}
         indicatorColor="secondary"
         onChange={(e, value) => setValue(value)}
         sx={{ marginLeft: "auto" }}
      >
         <Tab
            label={
               <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
               </Link>
            }
         />
         <Tab
            label={
               <Link
                  to="/create-proposal"
                  style={{ color: "white", textDecoration: "none" }}
               >
                  Create Proposal
               </Link>
            }
         />
         <Tab
            label={
               <Link
                  to="/view-proposal"
                  style={{ color: "white", textDecoration: "none" }}
               >
                  View Proposal
               </Link>
            }
         />
         <Tab
            label={
               <Link
                  to="/about"
                  style={{ color: "white", textDecoration: "none" }}
               >
                  About
               </Link>
            }
         />
      </Tabs>
   );
}
