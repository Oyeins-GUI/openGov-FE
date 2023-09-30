export function splitProposalId(id) {
   let splitId = id.split("");
   splitId.splice(0, 1);

   return splitId.join("");
}
