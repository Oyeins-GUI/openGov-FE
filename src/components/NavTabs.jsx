import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userSession } from "./ConnectWallet";

export default function NavTabs() {
   const [value, setValue] = useState(1);
   const signedIn = userSession.isUserSignedIn();

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Tabs
         textColor="inherit"
         // value={value}
         indicatorColor="secondary"
         onChange={(e, newValue) => console.log(newValue)}
         sx={{ marginLeft: "auto" }}
      >
         <Tab label="Home" value={1} to="/" component={Link} />
         <Tab
            label="create proposal"
            value={2}
            to="/create-proposal"
            component={Link}
         />
         {/* <Tab label="view proposal" to="/view-proposal" component={Link} /> */}
         <Tab label="treasury" value={3} to="/treasury" component={Link} />
         <Tab label="about" value={4} to="/about" component={Link} />
      </Tabs>
   );
}
