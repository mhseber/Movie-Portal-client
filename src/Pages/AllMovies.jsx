import Aos from "aos";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const response = await fetch("/AllMovies.json");
        if (!response.ok) {
          throw new Error("Failed to fetch AllMovies");
        }
        const data = await response.json();
        setAllMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error("Error fetching AllMovies:", error);
      } finally {
        // Show spinner for exactly 3 seconds
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchAllMovies();
  }, []);

  const handleSearch = () => {
    const filtered = allMovies.filter((movie) =>
      movie.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      {/* Header */}
      <div className="p-6 text-center text-white bg-black">
        <h1 className="text-4xl font-bold">All Movies</h1>
        <p className="text-gray-400">
          Explore all the movies added by our users
        </p>
        <div className="pt-4 join">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-white bg-gray-600 input input-bordered join-item"
            placeholder="Search movie..."
          />
          <button
            onClick={handleSearch}
            className="rounded-r-full btn join-item"
          >
            Search
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center py-20">
          <span className="loading loading-bars loading-2xl text-primary"></span>
        </div>
      ) : (
        <>
          {filteredMovies.length === 0 ? (
            <div className="py-20 text-xl font-bold text-center text-red-600">
              No movies found!
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 p-6 pb-40 md:grid-cols-2 lg:grid-cols-3">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  data-aos="fade-up"
                  className="shadow-xl card card-compact bg-base-100 w-96"
                >
                  <figure>
                    <img
                      data-aos="zoom-in"
                      className="w-full h-[276px] object-cover"
                      src={movie.moviePoster}
                      alt={movie.movieTitle}
                    />
                  </figure>
                  <div className="shadow-xl card-body shadow-black rounded-xl">
                    <h2 className="text-2xl font-extrabold text-black card-title">
                      {movie.movieTitle}
                    </h2>
                    <p>
                      <span className="font-semibold text-gray-600">
                        Genre:
                      </span>{" "}
                      {movie.genre}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-600">
                        Duration:
                      </span>{" "}
                      {movie.duration}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-600">
                        Release Year:
                      </span>{" "}
                      {movie.releaseYear}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-600">
                        Rating:
                      </span>{" "}
                      {movie.rating}
                    </p>
                    <div className="flex pt-4 text-yellow-500">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                      ))}
                    </div>
                    <div className="justify-end card-actions">
                      <Link
                        to={`/home/seeDetails/`}
                        className="text-white bg-black btn"
                      >
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllMovies;
