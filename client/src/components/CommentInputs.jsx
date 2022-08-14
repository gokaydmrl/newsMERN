import React, { useCallback } from "react";
import { useState } from "react";
import Comments from "./Comments";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

const CommentInputs = () => {
  console.log("comment inputs rendered");
  const { id } = useParams();

  // const refreshComments = () => <Comments />;

  const [code, setCode] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit got clicked");
    try {
      const commentResponse = await axios.post(
        `http://localhost:3001/opinions/${id}`,
        opinion
      );
      console.log("newitem resp", commentResponse);
      console.log("status codeee", commentResponse.status);
      setCode(() => commentResponse.status);
      setOpinion({
        fullName: "",
        opinion: "",
      });
      return commentResponse;
    } catch (error) {
      console.log(error);
    }
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
        <button>Make Comment</button>
      </form>
      <Comments code={code} />
    </div>
  );
};

export default CommentInputs;
