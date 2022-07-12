import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CommentInputs from "../components/CommentInputs";

const NewsItem = () => {
  const { id } = useParams();

  const [haberItem, setHaberItem] = useState({});

  useEffect(() => {
    const handler = async () => {
      const response = await axios.get(`http://localhost:3001/news/${id}`);
      setHaberItem(response.data);
      console.log("respo ıtem", response);
    };
    handler();
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("got clicked");
    // createOpinionAction(opinion);
    axios.post(`http://localhost:3001/opinions/${id}`, opinion);
  };

  return (
    <div>
      <p>{haberItem.title}</p>
      <p>{haberItem.content}</p>
      <CommentInputs
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        opinion={opinion}
      />
    </div>
  );
};

export default NewsItem;
