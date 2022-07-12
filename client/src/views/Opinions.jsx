// import { useState } from "react";
// import { createOpinionAction } from "../actions/createOpinionAction";
// import CommentInputs from "../components/CommentInputs";

// function PostOpinion() {
//   const [opinion, setOpinion] = useState({
//     fullName: "",
//     opinion: "",
//   });

//   const handleChange = (e) => {
//     setOpinion({
//       ...opinion,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("got clicked");
//     createOpinionAction(opinion);
//   };

//   return (
//     <div>
//       <CommentInputs
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//         opinion={opinion}
//       />
//     </div>
//   );
// }

// export default PostOpinion;
