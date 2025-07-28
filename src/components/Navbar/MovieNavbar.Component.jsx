import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";

// movie search
import MovieCard from "./MovieCard";
// import "./MovieCss.css";

const API_URL = "https://omdbapi.com?apikey=fe2f6c44";

const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  // useEffect(() => {
  //   searchMovies("SpiderMan");
  // }, []);
  return (
    <>
      <div className="container flex flex-col mx-auto px-4 items-center justify-center display-flex app">
        {/* <div className="flex items-center w-1/2 gap-1">
          <h4 className="text-white  ">book</h4>
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-9 h-10"
          />
          <h4 className="text-white font-">show</h4>
        </div> */}
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md search justify-center ">
          <div className="flex items-center gap-1">
            <h4 className="text-black  ">book</h4>
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-9 h-10"
            />
            <h4 className="text-black font-">show</h4>
          </div>
          <input
            className="Search w-full bg-transparent focus:outline-none flex-1 border-nonepy-6 px-7 "
            placeholder="Search for Movies"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
            alt="search icon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className=" w-full mt-3 m-5 flex items-center justify-center flex-wrap">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Bangalore, KA <BiChevronDown />
        </span>
        <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
          Sign In
        </button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-1">
          <h4 className="text-white ">book</h4>
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-9 h-10"
          />
          <h4 className="text-white font-">show</h4>
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events plays, sports and activites"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
          Bangalore, KA <BiChevronDown />
        </span>
        <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
          Sign In
        </button>
        <div className="w-8 h-8 text-white">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
        {/* This is for Mobile Screen - NavBar */}
        <div className="md:hidden sm:flex">
          <NavSm />
        </div>
        <div className="md:hidden">
          {/* Modile and medium Screen Size  */}
          <NavSm />
        </div>
        <div className="hidden w-full lg:flex">
          {/*Large Screen Size  */}
          <MovieSearch />
          {/* <NavLg /> */}
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
