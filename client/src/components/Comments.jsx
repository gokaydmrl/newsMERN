import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { memo } from "react";

const Comments = ({ code }) => {
  console.log("comments rendered");

  const { id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("effect");
    const handler = async () => {
      const response = await axios.get(
        `http://localhost:3001/opinionsByNewId/${id}`
      );
      setComments(response.data);
      console.log("comment resp", response.data);
    };
    handler();
  }, [code]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment._id}>
            <p>{comment.fullName}</p>
            <p>{comment.opinion}</p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Comments);
