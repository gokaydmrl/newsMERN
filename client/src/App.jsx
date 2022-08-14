// import PostOpinion from "./views/Opinions";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
// import AddOpinion from "./views/AddOpinion";
import NewsItem from "./views/NewsItem"
import News from "./views/News";
import NavBar from "./components/NavBar";

function App() {

  const id = useParams()
  

  return (
    <div className="App">
        <NavBar />
        {/* <Routes>
          <Route path="/makecomment" element={<PostOpinion />} />
        </Routes> */}
        {/* <Routes>
          <Route path="/" element={<AddOpinion />} />
        </Routes> */}
        <Routes>
          <Route path="/home" element={<News />} />
          <Route path="/home/:id" element={<NewsItem />} />
        </Routes>
    </div>
  );
}

export default App;
