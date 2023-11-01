import { Button, Box } from "@mui/material";
import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";
import { uintCV } from "@stacks/transactions";

const testnet = new StacksTestnet();

export default function FundPool({ amount }) {
   const { doContractCall } = useConnect();

   const onClick = async () => {
      const functionArgs = [uintCV(amount)];

      const options = {
         network: testnet,
         contractAddress: "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N",
         contractName: "fund-treasury-pool",
         functionName: "fund-treasury-pool",
         functionArgs,
         appDetails: {
            name: "Stacks Open Gov",
            icon: window.location.origin + "/my-app-logo.svg",
         },
         onFinish: (data) => {
            const explorerTransactionUrl = `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`;
            console.log("Stacks Transaction:", data.stacksTransaction);
            console.log("Transaction ID:", data.txId);
            console.log("Raw transaction:", data.txRaw);
            console.log(
               "View transaction in explorer:",
               explorerTransactionUrl
            );
         },
      };

      await doContractCall(options);
   };

   return (
      // <Box sx={{ textAlign: "center" }}>
      <Button
         variant="contained"
         sx={{ margin: "0 auto", display: "flex" }}
         onClick={onClick}
      >
         Fund Pool
      </Button>
      // </Box>
   );
}
