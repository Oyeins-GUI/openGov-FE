import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Typography, Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { openSTXTransfer } from "@stacks/connect";
import { StacksTestnet } from "@stacks/network";

const testnet = new StacksTestnet();

export default function Treasury() {
   const form = useForm({
      defaultValues: {
         amount: "",
      },
   });
   const { register, handleSubmit, formState } = form;
   const { errors } = formState;
   const onSubmit = (data) => {
      const { amount } = data;
      fundTreasuryPool(amount);
   };

   const [poolBalance, setPoolBalance] = useState({});
   const [showFundPool, setShowFundPool] = useState(false);

   useEffect(() => {
      async function getPoolBalance() {
         const response = await fetch(
            "https://api.testnet.hiro.so/extended/v1/address/ST33Y5T5GF91HE6PGD9QD0JAC93XHT2P52TW0P3YC/stx"
         );
         const data = await response.json();
         setPoolBalance(data);
      }

      getPoolBalance();
   }, []);

   const fundTreasuryPool = async (amount) => {
      openSTXTransfer({
         recipient: "ST33Y5T5GF91HE6PGD9QD0JAC93XHT2P52TW0P3YC",
         amount: `${amount * 1000000}`,
         memo: "pool funding",
         network: testnet,
         appDetails: {
            name: "Stacks Open Gov",
            icon: window.location.origin + "/my-app-logo.svg",
         },
         onFinish: (data) => {
            console.log("Stacks Transaction:", data.stacksTransaction);
            console.log("Transaction ID:", data.txId);
            console.log("Raw transaction:", data.txRaw);
         },
      });
   };

   return (
      <>
         <Navbar />
         <Typography
            variant="h6"
            sx={{ marginTop: "80px", textAlign: "center" }}
         >
            Pool's Balance:{" "}
            {Object.keys(poolBalance).length === 0
               ? 0
               : +poolBalance.balance / 1000000}{" "}
            STX
         </Typography>
         <Typography variant="h6" sx={{ textAlign: "center" }}>
            Do you want to fund the pool?{" "}
            <span
               style={{ textDecoration: "underline", cursor: "pointer" }}
               onClick={() => {
                  if (showFundPool) {
                     setShowFundPool(false);
                  } else {
                     setShowFundPool(true);
                  }
               }}
            >
               {showFundPool ? "No" : "Yes"}
            </span>
         </Typography>
         {showFundPool && (
            <form
               noValidate
               onSubmit={handleSubmit(onSubmit)}
               autoComplete="false"
               style={{
                  margin: "auto",
                  width: "100%",
                  maxWidth: "450px",
               }}
            >
               <Stack
                  spacing={3}
                  sx={{ paddingInline: "10px", marginTop: "30px" }}
               >
                  <TextField
                     label="Amount"
                     type="number"
                     placeholder="Enter amount"
                     {...register("amount", {
                        required: "Amount is required",
                        min: {
                           value: 1,
                           message: "Amount must be greater than 0",
                        },
                     })}
                     error={!!errors.amount}
                     helperText={errors.amount?.message}
                  />
               </Stack>
               <Button
                  variant="contained"
                  sx={{ margin: "20px auto 0 auto", display: "flex" }}
                  onClick={handleSubmit(onSubmit)}
               >
                  Fund Pool
               </Button>
            </form>
         )}
      </>
   );
}
