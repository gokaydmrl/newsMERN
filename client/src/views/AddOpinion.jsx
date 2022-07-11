import { useState, useEffect } from "react";
import { getOpinionAction } from "../actions/getOpinionAction"

export function AddOpinion() {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    const handler = async () => {
      const opinionItems = await getOpinionAction();
      setOpinions(opinionItems.data);
      console.log("op items", opinionItems);
    };
    console.log("opss", opinions);
    handler();
  }, []);

  return (
    <div>
      {opinions.map((opinionItem) => {
        return (
          <div key={opinionItem._id}>
            <p>{opinionItem.userName}</p>
            <p>{opinionItem.message}</p>
          </div>
        );
      })}
    </div>
  );
}
