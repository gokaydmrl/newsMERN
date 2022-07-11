import axios from "axios";

export const getOpinionAction = async () => {
  try {
    const response = await axios.get("http://localhost:3001/opinions");
    return response;
  } catch (error) {
    console.log("error while getting opinions: ", error);
  }
};
