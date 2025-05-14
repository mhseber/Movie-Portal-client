import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { moviePoster, movieTitle, genre, duration, releaseYear, rating } =
    movie;
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="pb-40">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="shadow-xl card card-compact bg-base-100 w-96"
      >
        <figure data-aos="fade-up" data-aos-delay="100">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-full h-[276px]"
            src={moviePoster}
            alt="poster"
          />
        </figure>
        <div className="shadow-xl card-body shadow-black rounded-xl">
          <h2
            data-aos="fade-up"
            className="text-2xl font-extrabold text-black card-title"
          >
            {movieTitle}
          </h2>
          <p data-aos="slide-right">
            <span className="text-xl font-semibold text-gray-600">
              Genre :{" "}
            </span>
            {genre}
          </p>
          <p data-aos="slide-right">
            {" "}
            <span className="text-xl font-semibold text-gray-600">
              Duration :{" "}
            </span>
            {duration}
          </p>
          <p data-aos="slide-right">
            {" "}
            <span className="text-xl font-semibold text-gray-600">
              ReleaseYear :{" "}
            </span>
            {releaseYear}
          </p>
          <p data-aos="slide-right">
            {" "}
            <span className="text-xl font-semibold text-gray-600">
              Rating :{" "}
            </span>
            {rating}
          </p>
          <div className="flex pt-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="justify-end card-actions">
            <Link
              to="/home/seeDetails"
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-white bg-black btn hover:bg-gray-900"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
