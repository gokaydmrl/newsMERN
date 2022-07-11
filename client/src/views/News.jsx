import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsAction } from "../actions/getNewsAction";
import { Link } from "react-router-dom";
import NewsItem from "./NewsItem";

function Haberler() {
  const [haberler, setHaberler] = useState([]);

  const { id } = useParams();
  console.log("id", id);

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
          <Link key={haber._id} to={`/home/${haber._id}`}>
            <div>
              <h1>{haber.title}</h1>
              <p>{haber.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Haberler;
