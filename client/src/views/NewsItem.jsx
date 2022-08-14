import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CommentInputs from "../components/CommentInputs";

const NewsItem = () => {
  console.log("newsitem rendered");

  const { id } = useParams();
  console.log("haber idsi: ", id);
  const [haberItem, setHaberItem] = useState({});

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

  return (
    <div>
      <p>{haberItem.title}</p>
      <p>{haberItem.content}</p>
      <CommentInputs />
    </div>
  );
};

export default NewsItem;
