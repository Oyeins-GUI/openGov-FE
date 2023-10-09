function parseTuple(tupleString) {
   // Remove the parentheses and split the string into pairs
   const tuplePairs = tupleString
      .slice(7, -1) // Remove "(tuple " at the beginning and ")" at the end
      .split(") (")
      .map((pair) => pair.split(" "));

   return tuplePairs;
   // console.log(tupleString);
}

export function likeTupleToObject(tupleString) {
   const tuplePairs = parseTuple(tupleString);
   // console.log(tuplePairs);
   const obj = {};

   for (const [key, value] of tuplePairs) {
      obj[key] = value;
   }

   return obj;
}
