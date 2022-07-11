import axios from "axios";

export const getNewsAction = async () => {
  try {
    const response = await axios.get("http://localhost:3001/news");
    return response.data;
  } catch (error) {
    console.log("error while fetching news: ", error);
  }
};
