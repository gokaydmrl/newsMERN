// import { useState, useEffect } from "react";
// import { getOpinionAction } from "../actions/getOpinionAction";

// export function AddOpinion() {
//   const [opinions, setOpinions] = useState([]);

//   useEffect(() => {
//     const handler = async () => {
//       const response = await getOpinionAction();
//       setOpinions(response.data);
//       // console.log("op items");
//     };
//     console.log("opss", opinions);
//     handler();
//   }, []);

//   return (
//     <div>
//       {opinions.map((opinionItem) => {
//         return (
//           <div key={opinionItem._id}>
//             <p>{opinionItem.fullName}</p>
//             <p>{opinionItem.opinion}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default AddOpinion;
