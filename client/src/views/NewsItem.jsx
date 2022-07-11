import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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

  return (
    <div>
      <p>{haberItem.title}</p>
      <p>{haberItem.content}</p>
    </div>
  );
};

export default NewsItem;
