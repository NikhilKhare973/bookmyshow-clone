import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

// Layout Hoc
import DefaultLayoutHoc from "../layout/Default.layout";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  // 1
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  // 2
  useEffect(() => {
    const requestTopratedMovies = async () => {
      // 1. URL directly
      const getTopratedMovies = await axios.get("/movie/top_rated");
      setpremierMovies(getTopratedMovies.data.results);
    };
    requestTopratedMovies();
  }, []);

  // 3 &sort_by=popularity.desc&region=IN
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setonlineStreamEvents(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3 ">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-6 md:px-12 my-6 ">
        <div className="hidden md:flex">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
            alt="Rupay"
            className="w-95 h-70"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <PosterSlider
              title="Premiers"
              subtitle="Brand new relases every Friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PosterSlider
          title="Online Streaming Events"
          // subj blank??
          subtitle="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
