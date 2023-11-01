import Navbar from "../components/Navbar";
import Proposals from "../components/Proposals";
import { Typography } from "@mui/material";
import {
   uintCV,
   hexToCV,
   tupleCV,
   cvToHex,
   cvToValue,
} from "@stacks/transactions";
import { useEffect } from "react";

export default function Home() {
   // useEffect(() => {
   //    async function getMap() {
   //       const rawResponse = await fetch(
   //          "https://api.testnet.hiro.so/v2/map_entry/ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N/open-gov-v5/Proposals",
   //          {
   //             method: "POST",
   //             headers: {
   //                Accept: "application/json",
   //                "Content-Type": "application/json",
   //             },
   //             body: JSON.stringify(
   //                cvToHex(tupleCV({ "proposal-id": uintCV("4") }))
   //             ),
   //          }
   //       );
   //       const content = await rawResponse.json();
   //       console.log(cvToValue(hexToCV(content.data)).value);
   //    }

   //    getMap();
   // }, []);

   return (
      <>
         <Navbar />
         <Typography
            variant="h1"
            sx={{
               marginTop: "110px",
               textAlign: "center",
               fontSize: "40px",
               fontWeight: "bold",
            }}
         >
            Giving projects/ideas a way to do more.
         </Typography>
         <Typography
            variant="body1"
            sx={{
               marginTop: "15px",
               textAlign: "center",
               fontSize: "20px",
               maxWidth: "600px",
               margin: "auto",
            }}
         >
            Our platform empowers decentralized voting and funding for a more
            secure and transparent web3 ecosystem.
         </Typography>
         <Proposals />
      </>
   );
}
