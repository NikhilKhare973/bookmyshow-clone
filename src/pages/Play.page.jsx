import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import { Link } from "react-router-dom";

// component
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.component";

const PlayPage = (props) => {
  return (
    <>
      <div className="container mx-auot px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <Link
            to="https://in.bookmyshow.com/movies/jabalpur/mission-impossible-the-final-reckoning/ET00419530"
            className="Plays"
            target="_blank"
          >
            <h2 className="text-2xl font-bold mb-4">Plays in Hospet</h2>
          </Link>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                // src="/6Ea5i6APeTfm4hHh6dg5Z733JVS.jpg"
                poster_path="/6Ea5i6APeTfm4hHh6dg5Z733JVS.jpg"
                id="950387"
                title="So Rude of Me By Sweets"
                vote_average="5K"
                subtitle="Comdy Shows | English, Hindi, Kannada | 10yrs+ | 2hr 30mins "
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              {/* <Link to={`/movie/"575265"`}></Link> */}
              <Poster
                isPlay={true}
                id="575265"
                poster_path="/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg"
                title="So Rude of Me By Sweets"
                vote_average="6.6"
                subtitle="Comdy Shows | English, Hindi, Kannada | 10yrs+ | 2hr 30mins "
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                id="1197306"
                poster_path="/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg"
                title="So Rude of Me By Sweets"
                vote_average="5K"
                subtitle="Comdy Shows | English, Hindi, Kannada | 10yrs+ | 2hr 30mins "
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                id="950387"
                poster_path="/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg"
                title="So Rude of Me By Sweets"
                vote_average="5K"
                subtitle="Comdy Shows | English, Hindi, Kannada | 10yrs+ | 2hr 30mins "
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3  ">
              <Poster
                id="896536"
                src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jungle-cruise-et00081136-01-06-2021-05-03-44.jpg"
                poster_path="/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
                title="lorem ipsum dior"
                subtitle="Hollywood ₹300"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                id="574475"
                poster_path="/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg"
                title="So Rude of Me By Sweets"
                vote_average="5K"
                subtitle="Comdy Shows | English, Hindi, Kannada | 10yrs+ | 2hr 30mins "
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                id="575265"
                poster_path="/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg"
                title="So Rude of Me By Sweets"
                vote_average="6.6"
                subtitle="Comdy Shows | English, Hindi, Kannada | 10yrs+ | 2hr 30mins "
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                id="1232546"
                poster_path="/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
                title="So Rude of Me By Sweets"
                vote_average="5K"
                subtitle="Comdy Shows | English, Hindi, Kannada | 10yrs+ | 2hr 30mins "
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4"> Fliter</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This weekend"]}
            />
          </div>
          <div>
            <PlayFilters
              title="Language"
              tags={["English", "Hindi", "Kannada", "Telgu", "Marathi"]}
            />
            <PlayFilters
              title="Categories "
              tags={["Romance", "Drama", "Action"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
