import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Card = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch("./movieData.json")
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, []);
  return (
    <div>
      <h1 className="pt-6 text-5xl text-center text-black">Featured Movies</h1>
      <p className="pt-4 pb-8 text-center text-gray-400">
        Check out the latest movies added to the collection.
      </p>

      {/* card */}
      <div className="grid grid-cols-1 pl-10  lg:grid-cols-3 md:grid-cols-2 gap-y-5">
        {movie.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
