import {
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Stack,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { tupleToObject } from "../utils/tupleToObject";
import { splitProposalId } from "../utils/splitId";
import { useState, useEffect } from "react";
import ProposalCard from "./ProposalCard";

export default function GetProposals() {
   const contractId =
      "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N.events-create-v3";
   const likeContractId =
      "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N.events-like-v3";
   const disLikeContractId =
      "ST16FECHZJPM4Z95D0Y2G7MSPGK0JHHCAE3JT049N.events-dislike-v3";
   const [contractEvents, setContractEvents] = useState([]);
   const [proposalLikesEvent, setProposalLikesEvents] = useState([]);
   const [proposalDisLikesEvent, setProposalDisLikesEvents] = useState([]);

   useEffect(() => {
      const getContractEvents = async () => {
         const req = await fetch(
            `https://api.testnet.hiro.so/extended/v1/contract/${contractId}/events`
         );
         const res = await req.json();
         setContractEvents(res.results);
      };
      getContractEvents();

      const getProposalLikes = async () => {
         const req = await fetch(
            `https://api.testnet.hiro.so/extended/v1/contract/${likeContractId}/events`
         );
         const res = await req.json();
         setProposalLikesEvents(res.results);
      };
      getProposalLikes();

      const getProposalDisLikes = async () => {
         const req = await fetch(
            `https://api.testnet.hiro.so/extended/v1/contract/${disLikeContractId}/events`
         );
         const res = await req.json();
         setProposalDisLikesEvents(res.results);
      };
      getProposalDisLikes();
   }, []);

   const allLikeEvents = proposalLikesEvent.map((events) => {
      return events.contract_log.value.repr;
   });
   const allDislikeEvents = proposalDisLikesEvent.map((events) => {
      return events.contract_log.value.repr;
   });

   return (
      <Stack
         sx={{
            margin: "auto",
            maxWidth: "620px",
            paddingInline: "20px",
         }}
         direction="column"
      >
         {contractEvents.map((event, i) => {
            const tupleObject = tupleToObject(event.contract_log.value.repr);
            const desc = tupleObject.tuple.split("(desc ")[1];
            const id = tupleObject.id;

            if (id === undefined) return;

            return (
               <div key={i}>
                  <Accordion sx={{ marginTop: "15px" }}>
                     <AccordionSummary
                        expandIcon={<ExpandMore />}
                        sx={{
                           textTransform: "capitalize",
                           display: "flex",
                           alignItems: "center",
                        }}
                     >
                        <Typography variant="h6">
                           {tupleObject.title}{" "}
                           <Typography
                              variant="body1"
                              sx={{
                                 textTransform: "lowercase",
                                 display: "flex",
                                 alignItems: "center",
                              }}
                           >
                              id: {splitProposalId(id)}
                           </Typography>
                        </Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <ProposalCard
                           id={id}
                           desc={desc}
                           allLikeEvents={allLikeEvents}
                           allDislikeEvents={allDislikeEvents}
                        />
                     </AccordionDetails>
                  </Accordion>
               </div>
            );
         })}
      </Stack>
   );
}
