import { uintCV, stringAsciiCV } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";
import { openContractCall } from "@stacks/connect";

const testnet = new StacksTestnet();

export async function callCreateProposal(title, niche, description) {
   const functionArgs = [
      stringAsciiCV(title),
      stringAsciiCV(niche),
      stringAsciiCV(description),
   ];

   const options = {
      network: testnet,
      contractAddress: "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N",
      contractName: "open-gov-v5",
      functionName: "create-proposal",
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
         console.log("View transaction in explorer:", explorerTransactionUrl);
         alert(
            "When transaction is confirmed it will be available in https://localhost:5173/view-proposals"
         );
      },
   };

   await openContractCall(options);
}

export async function likeProposal(id) {
   const functionArgs = [uintCV(id)];

   const options = {
      network: testnet,
      contractAddress: "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N",
      contractName: "open-gov-v5",
      functionName: "like-proposal",
      functionArgs,
      appDetails: {
         name: "openGov",
         icon: window.location.origin + "/my-app-logo.svg",
      },
      onFinish: (data) => {
         const explorerTransactionUrl = `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`;
         console.log("Stacks Transaction:", data.stacksTransaction);
         console.log("Transaction ID:", data.txId);
         console.log("Raw transaction:", data.txRaw);
         console.log("View transaction in explorer:", explorerTransactionUrl);
      },
   };

   await openContractCall(options);
}

export async function dislikeProposal(id) {
   const functionArgs = [uintCV(id)];

   const options = {
      network: testnet,
      contractAddress: "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N",
      contractName: "open-gov-v5",
      functionName: "dislike-proposal",
      functionArgs,
      appDetails: {
         name: "openGov",
         icon: window.location.origin + "/my-app-logo.svg",
      },
      onFinish: (data) => {
         const explorerTransactionUrl = `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`;
         console.log("Stacks Transaction:", data.stacksTransaction);
         console.log("Transaction ID:", data.txId);
         console.log("Raw transaction:", data.txRaw);
         console.log("View transaction in explorer:", explorerTransactionUrl);
      },
   };

   await openContractCall(options);
}

export async function fundTreasuryPool(amount) {
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
         console.log("View transaction in explorer:", explorerTransactionUrl);
         alert(
            "When transfer transaction is confirmed pool's balance will be updated in https://open-gov.vercel.app/treasury"
         );
      },
   };

   await openContractCall(options);
}
