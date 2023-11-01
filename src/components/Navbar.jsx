import {
   AppBar,
   Toolbar,
   Typography,
   Dialog,
   DialogContent,
   DialogTitle,
   DialogContentText,
   DialogActions,
   Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerComp from "../components/DrawerComp";
import NavTabs from "./NavTabs";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import ConnectWallet from "./ConnectWallet";
import useStyles from "../styles";
import theme from "../theme";
import { useState } from "react";
import { userSession } from "./ConnectWallet";

function Navbar() {
   const [open, setOpen] = useState(false);
   const classes = useStyles();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   const testnetAddress = userSession.loadUserData().profile.stxAddress.testnet;
   const mainnetAddress = userSession.loadUserData().profile.stxAddress.mainnet;

   return (
      <>
         <AppBar>
            <Toolbar>
               {isMatch && <DrawerComp />}
               <Typography
                  variant="h6"
                  sx={{
                     fontSize: { xs: "14px", sm: "16px", md: "20px" },
                     marginRight: "5px",
                  }}
                  className={classes.logo}
               >
                  StacksOpenGov
               </Typography>
               {!isMatch && <NavTabs />}
               <ConnectWallet />
               <Tooltip title="Profile">
                  <PersonIcon
                     sx={{ marginLeft: "10px", cursor: "pointer" }}
                     onClick={() => setOpen(true)}
                  />
               </Tooltip>
            </Toolbar>
         </AppBar>
         <Dialog open={open}>
            <DialogTitle>Profile</DialogTitle>
            <DialogContent>
               <DialogContentText>
                  <Typography variant="subtitle1">
                     Testnet: {testnetAddress}
                  </Typography>
                  <Typography variant="subtitle1">
                     Mainnet: {mainnetAddress}
                  </Typography>
               </DialogContentText>
            </DialogContent>
            <DialogActions onClick={() => setOpen(false)}>
               <Button>Close</Button>
            </DialogActions>
         </Dialog>
      </>
   );
}

export default Navbar;
