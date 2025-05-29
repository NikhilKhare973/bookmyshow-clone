import React from "react";
// import icon from "./favicon.png";

const FilmyPass = () => {
  return (
    <div className="bg-coupenCol-100 flex items-start gap-2 border-2 border-dashed border-coupenCol-400 rounded-lg p-4 max-w-sm">
      <img src="" alt="favicon" className="w-8 h-8" />
      <div className="">
        <h3 className="text-lg font-semibold">Filmy Pass</h3>
        <p className="text-sm">
          Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass
          @Rs.99
        </p>
      </div>
    </div>
  );
};

export default FilmyPass;
