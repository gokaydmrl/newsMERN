import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comments = ({ opinion, code }) => {
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("effect");
    const handler = async () => {
      const response = await axios.get(
        `http://localhost:3001/opinionsByNewId/${id}`
      );
      // const commentArray = response.data.filter((item) => {
      //   return item.categoryID === id;
      // });
      setComments(response.data);
      console.log("comment resp", response.data);
    };
    handler();
  }, []);

  if (code === 201) {
    comments.push(opinion);
  }
  console.log("this code", code);

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

export default Comments;
