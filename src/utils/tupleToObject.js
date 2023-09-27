export function tupleToObject(tupleString) {
   const regex = /\((\w+) ([^)]+)\)/g;
   const result = {};

   let match;
   while ((match = regex.exec(tupleString)) !== null) {
      const [, key, value] = match;
      result[key] = value.replace(/['"]/g, "");
   }

   return result;
}
// console.log(
//    tupleToObject(
//       '(tuple (decision "yah") (total-votes u1) (votes-in-support u1))'
//    )
// );
