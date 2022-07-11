import { useEffect, useState } from "react";
import { getNewsAction } from "../actions/getNewsAction";

function Haberler() {
  const [haberler, setHaberler] = useState([]);

  useEffect(() => {
    const handler = async () => {
      const news = await getNewsAction();
      setHaberler(news);
      console.log("news", news);
    };
    handler();
  }, []);

  return (
    <div>
      {haberler.map((haber) => {
        return (
          <div key={haber._id}>
            <h1>{haber.title}</h1>
            <p>{haber.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Haberler;
