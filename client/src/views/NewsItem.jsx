import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CommentInputs from "../components/CommentInputs";
import Comments from "../components/Comments";

const NewsItem = () => {
  const { id } = useParams();
  console.log("haber idsi: ", id);
  const [haberItem, setHaberItem] = useState({});
  const [code, setCode] = useState(null);

  useEffect(() => {
    const handler = async () => {
      const response = await axios.get(`http://localhost:3001/news/${id}`);
      setHaberItem(response.data);
      console.log("haber ıtem", response);
    };
    handler();
  }, []);

  // console.log("haberitem", haberItem._id);

  /// comment functionality
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
    // createOpinionAction(opinion);
    try {
      const commentResponse = await axios.post(
        `http://localhost:3001/opinions/${id}`,
        opinion
      );
      console.log("newitem resp", commentResponse);
      console.log("status codeee", commentResponse.status);
      setCode(commentResponse.status);

      return commentResponse;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const getHandler = axios.get(`http://localhost:3001/opinions/${id}`);
  //   console.log("get yourm", getHandler);
  // }, []);

  return (
    <div>
      <p>{haberItem.title}</p>
      <p>{haberItem.content}</p>
      <CommentInputs
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        opinion={opinion}
      />
      <Comments opinion={opinion} code={code} />
    </div>
  );
};

export default NewsItem;
