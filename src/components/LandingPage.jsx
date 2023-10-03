import { Typography, Button, Link } from "@mui/material";

export default function LandingPage() {
   return (
      <>
         <div style={{ display: "grid", placeItems: "center" }}>
            <Typography
               variant="h3"
               style={{
                  marginTop: "100px",
                  textAlign: "center",
                  minWidth: "300px",
                  maxWidth: "500px",
               }}
            >
               About Open Gov
            </Typography>
         </div>
         <div
            style={{
               display: "grid",
               placeItems: "center",
            }}
         >
            <Typography
               variant="subtitle2"
               style={{
                  marginTop: "20px",
                  // textAlign: "",
                  fontSize: "18px",
                  paddingInline: "10px",
               }}
               sx={{ maxWidth: "600px", textAlign: "center" }}
            >
               In an era where decentralization and transparency are becoming
               increasingly important, blockchain technology has emerged as a
               powerful tool for fostering democratic decision-making processes.
               This project aims to leverage the Stacks blockchain to create a
               system that facilitates democratic decision-making through voting
               mechanisms, smart contracts, and a decentralized mini grant
               delegation pool. By combining these elements, we aim to empower
               communities and organizations to make collective decisions
               efficiently and transparently while supporting grassroots
               initiatives through mini grants.
            </Typography>
            <Link href="https://github.com/Oyeins-GUI/openGov-FE/#readme">
               <Button variant="outlined" style={{ marginBlock: "20px" }}>
                  Read More
               </Button>
            </Link>
         </div>
      </>
   );
}
