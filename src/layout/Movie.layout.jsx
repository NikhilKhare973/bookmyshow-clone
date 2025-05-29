import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <div className="container  mx-auto px-4 items-center justify-between ">
          <footer className="gap-5 mt-6">
            <p>
              &copy; 2025 Nikhil khare. All rights reserved.
              <span id="currentYear"></span>
            </p>
          </footer>
        </div>
      </div>
    );
  };

export default MovieLayoutHoc;
