import { Typography, Card, CardContent, CardActions } from "@mui/material";
import { ThumbUpOffAlt, ThumbDownOffAlt, Share } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { splitProposalId } from "../utils/splitId";
import { likeTupleToObject } from "../utils/parseTuple";
import { likeProposal, dislikeProposal } from "../utils/ContractCall";
import { useEffect, useState } from "react";

export default function ProposalCard({
   id,
   desc,
   allLikeEvents,
   allDislikeEvents,
}) {
   const likeEvents = allLikeEvents.map((event) => {
      const likeId = splitProposalId(likeTupleToObject(`${event}`)["(id"]);
      const likes = splitProposalId(
         likeTupleToObject(`${event}`)["votes-in-support"]
      );
      const totalVotes = splitProposalId(
         likeTupleToObject(`${event}`)["total-votes"]
      );

      return { likeId, likes };
   });
   const dislikeEvents = allDislikeEvents.map((event) => {
      const dislikeId = likeTupleToObject(`${event}`)["(id"];
      const dislikes = splitProposalId(
         likeTupleToObject(`${event}`)["votes-in-support"]
      );
      const totalVotes = splitProposalId(
         likeTupleToObject(`${event}`)["total-votes"]
      );

      return { dislikeId, dislikes };
   });

   const displayDislikeCount = (proposalId) => {
      return dislikeEvents.map((event) => {
         if (splitProposalId(`${proposalId}`) === event.dislikeId.split("")[1])
            return event.dislikes;
      });
   };

   console.log(displayDislikeCount(id)[0] === undefined);

   const displayLikeCount = (proposalId) => {
      return likeEvents.map((event) => {
         if (splitProposalId(`${proposalId}`) === event.likeId)
            return event.likes;
      });
   };

   return (
      <Card>
         <CardContent>{desc}</CardContent>
         <CardActions>
            <IconButton onClick={() => likeProposal(splitProposalId(`${id}`))}>
               <ThumbUpOffAlt />
               <Typography>
                  {displayLikeCount(id)[0] != undefined
                     ? displayLikeCount(id)[0].split("")[0]
                     : displayLikeCount(id)[1] === undefined
                     ? "0"
                     : displayLikeCount(id)[1].split("")[0]}
               </Typography>
            </IconButton>
            <IconButton
               onClick={() => dislikeProposal(splitProposalId(`${id}`))}
            >
               <ThumbDownOffAlt />
               <Typography>
                  {displayDislikeCount(id)[0] != undefined
                     ? displayDislikeCount(id)[0].split("")[0]
                     : "0"}
               </Typography>
            </IconButton>
            <IconButton>
               <LanguageIcon />
            </IconButton>
            <IconButton>
               <Share />
            </IconButton>
         </CardActions>
      </Card>
   );
}
