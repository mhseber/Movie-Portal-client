import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie }) => {
    const { moviePoster, movieTitle, genre, duration, releaseYear, rating } = movie
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        className='w-full h-[276px]'
                        src={moviePoster}
                        alt="poster" />
                </figure>
                <div className="card-body shadow-xl shadow-black rounded-xl">
                    <h2 className="card-title text-black font-extrabold text-2xl">{movieTitle}</h2>
                    <p><span className='text-gray-600 text-xl font-semibold'>Genre : </span>{genre}</p>
                    <p> <span className='text-gray-600 text-xl font-semibold'>Duration : </span>{duration}</p>
                    <p> <span className='text-gray-600 text-xl font-semibold'>ReleaseYear : </span>{releaseYear}</p>
                    <p> <span className='text-gray-600 text-xl font-semibold'>Rating : </span>{rating}</p>
                    <div className="flex pt-4">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-black text-white">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;