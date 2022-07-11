import PostOpinion from "./views/Opinions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddOpinion from "./views/AddOpinion";
import News from "./views/News";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/makecomment" element={<PostOpinion />} />
        </Routes>
        <Routes>
          <Route path="/" element={<AddOpinion />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
