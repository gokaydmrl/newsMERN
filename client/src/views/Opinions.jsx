import { useState } from "react";
import { createOpinionAction } from "../actions/createOpinionAction";

function PostOpinion() {
  const [opinion, setOpinion] = useState({
    fullName: "",
    opinion: "",
  });

  const handleChange = (e) => {
    setOpinion({
      ...opinion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("got clicked");
    createOpinionAction(opinion);
  };

  return (
    <div>
      <h1>Comment Out</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            name="fullName"
            value={opinion.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Opinion
          <input
            type="text"
            name="opinion"
            value={opinion.opinion}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Make Comment</button>
      </form>
    </div>
  );
}

export default PostOpinion;
