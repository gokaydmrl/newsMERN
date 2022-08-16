import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { useRef } from "react";

const CommentInputs = () => {
  console.log("comment inputs rendered");
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  // const [code, setCode] = useState(null);

  // const [opinion, setOpinion] = useState({
  //   fullName: "",
  //   opinion: "",
  // });
  const handler = async () => {
    const response = await axios.get(
      `http://localhost:3001/opinionsByNewId/${id}`
    );
    setComments(response.data);
    console.log("comment resp", response.data);
  };



  const nameRef = useRef();
  const opinionRef = useRef();

  // const handleChange = (e) => {
  //   setOpinion({
  //     ...opinion,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit got clicked");
    console.log("nameref", nameRef.current.value);
    console.log("opRef", opinionRef.current.value);

    try {
      const opinion = {
        fullName: nameRef.current?.value,
        opinion: opinionRef.current?.value,
      };

      const commentResponse = await axios.post(
        `http://localhost:3001/opinions/${id}`,
        opinion
      );
      console.log("op", opinion);
      //   console.log("newitem resp", commentResponse);
      //   console.log("status codeee", commentResponse.status);
      //   // setCode(() => commentResponse.status);
      //   // setOpinion({
      //   //   fullName: "",
      //   //   opinion: "",
      //   // });
      handler();
      // opinion = {
      //   fullName: "",
      //   opinion: "",
      // };
      return commentResponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("get comment effecti çalıştı");
    handler();
  }, []);

  // console.log("this length", comments.length);

  return (
    <div>
      <h1>Comment Out</h1>
      <form onSubmit={handleSubmit}>
        <input name={"fullName"} ref={nameRef} type="text" placeholder="name"  />
        <input
          name={"opinion"}
          ref={opinionRef}
          type="text"
          placeholder="opinion"
          
        />
        <button>Make Comment</button>
      </form>
      <div>
        {comments.map((comment) => {
          return (
            <div
              style={{
                textAlign: "left",
                marginLeft: "400px",
              }}
              key={comment._id}
            >
              <p>{comment.fullName}</p>
              <p>{comment.opinion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentInputs;
