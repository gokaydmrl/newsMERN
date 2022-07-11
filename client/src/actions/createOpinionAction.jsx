import axios from "axios"

export const createOpinionAction = async (opinion) => {
  try {
    const response = await axios.post("http://localhost:3001/opinions", opinion);
    return response;
  } catch (error) {
    console.log("error while creating opinion",error);
  }
};
