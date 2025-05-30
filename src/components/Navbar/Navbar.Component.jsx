import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold ">It All Starts Here!!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Jabalpur PVR
            <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="w-10 h10">
        <img
          src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
          placeholder="Search for movies, events, plays, sports and activites"
        />
      </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            {/* <h4 className="text-white ">book</h4> */}
            <Link to="/" className="Home">
              {/* target="_blank" */}
              <img
                src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
            {/* <h4 className="text-white font-">show</h4> */}
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none "
              placeholder="Search for movies, events, plays, sports and activites"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Jabalpur PVR <BiChevronDown />
          </span>
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            <Link to="/Plays" className="Plays">
              {/* target="_blank" */}
              Plays
            </Link>
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* This is for Mobile Screen - NavBar */}
      <div className="md:hidden">
        <NavSm />
      </div>

      {/* This is for Medium/Tab Screen - NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      {/* This is for Large Screen - NavBar  */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;
