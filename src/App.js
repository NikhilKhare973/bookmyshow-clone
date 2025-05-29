import "./App.css";
import axios from "axios";

// Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import PlayPage from "./pages/Play.page";

// Routes
import { Routes, Route } from "react-router-dom";

// React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};

// 2 . URL is here's axios --> App.js
// axios.defaults.params["api_key"] = "c54ab2f18bdf2fcbf4283c5aa5ab488c";

// 3 . URL is here's useing .env
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
