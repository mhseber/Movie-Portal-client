import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const { moviePoster, movieTitle, genre, duration, releaseYear, rating } = movie
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);
    return (
        <div className="pb-40">
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="card card-compact bg-base-100 w-96 shadow-xl">

                <figure
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <img
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className='w-full h-[276px]'
                        src={moviePoster}
                        alt="poster" />
                </figure>
                <div className="card-body shadow-xl shadow-black rounded-xl">
                    <h2 data-aos="fade-up" className="card-title text-black font-extrabold text-2xl">{movieTitle}</h2>
                    <p data-aos="slide-right"><span className='text-gray-600 text-xl font-semibold'>Genre : </span>{genre}</p>
                    <p data-aos="slide-right"> <span className='text-gray-600 text-xl font-semibold'>Duration : </span>{duration}</p>
                    <p data-aos="slide-right"> <span className='text-gray-600 text-xl font-semibold'>ReleaseYear : </span>{releaseYear}</p>
                    <p data-aos="slide-right"> <span className='text-gray-600 text-xl font-semibold'>Rating : </span>{rating}</p>
                    <div className="flex pt-4">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className="card-actions justify-end">

                        <Link
                            to="/home/seeDetails"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="btn bg-black text-white">See Details</Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;