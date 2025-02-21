// import Aos from "aos";
// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";


// const AllMovies = () => {
//     const [AllMovie, setAllMovie] = useState([]);
//     useEffect(() => {
//         Aos.init({ duration: 1000, once: true })
//     }, []);

//     useEffect(() => {
//         const fetchAllMovies = async () => {
//             try {
//                 const response = await fetch("/AllMovies.json");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch AllMovies");
//                 }
//                 const data = await response.json();
//                 setAllMovie(data);
//             } catch (error) {
//                 console.error("Error fetching AllMovies:", error);
//             }
//         };

//         fetchAllMovies();
//     }, []);
//     return (
//         <div>
//             <div className='text-center bg-black text-white p-6'>
//                 <h1 className='text-4xl font-bold'>All Movies</h1>
//                 <p className='text-gray-400'>Explore all the movies added by our users</p>
//                 <div className="join pt-4">
//                     <input className="input input-bordered join-item bg-gray-600 text-white" placeholder="Search movie..." />
//                     <button className="btn join-item rounded-r-full ">Search</button>
//                 </div>
//             </div>
//             {/* card */}
//             <div className="pb-40">
//                 <div
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                     className="card card-compact bg-base-100 w-96 shadow-xl">

//                     <figure
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                     >
//                         <img
//                             data-aos="zoom-in"
//                             data-aos-delay="200"
//                             className='w-full h-[276px]'
//                             src={AllMovie.moviePoster}
//                             alt="poster" />
//                     </figure>
//                     <div className="card-body shadow-xl shadow-black rounded-xl">
//                         <h2 data-aos="fade-up" className="card-title text-black font-extrabold text-2xl">{AllMovie.movieTitle}</h2>
//                         <p data-aos="slide-right"><span className='text-gray-600 text-xl font-semibold'>Genre : </span>{AllMovie.genre}</p>
//                         <p data-aos="slide-right"> <span className='text-gray-600 text-xl font-semibold'>Duration : </span>{AllMovie.duration}</p>
//                         <p data-aos="slide-right"> <span className='text-gray-600 text-xl font-semibold'>ReleaseYear : </span>{AllMovie.releaseYear}</p>
//                         <p data-aos="slide-right"> <span className='text-gray-600 text-xl font-semibold'>Rating : </span>{AllMovie.rating}</p>
//                         <div className="flex pt-4">
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                         </div>
//                         <div className="card-actions justify-end">

//                             <Link
//                                 to="/home/seeDetails"
//                                 data-aos="fade-up"
//                                 data-aos-delay="300"
//                                 className="btn bg-black text-white">See Details</Link>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllMovies;


import Aos from "aos";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllMovies = () => {
    const [AllMovie, setAllMovie] = useState([]);
    const [loading, setLoading] = useState(true);

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
                setAllMovie(data);
            } catch (error) {
                console.error("Error fetching AllMovies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllMovies();
    }, []);

    return (
        <div>
            {/* Header */}
            <div className='text-center bg-black text-white p-6'>
                <h1 className='text-4xl font-bold'>All Movies</h1>
                <p className='text-gray-400'>Explore all the movies added by our users</p>
                <div className="join pt-4">
                    <input className="input input-bordered join-item bg-gray-600 text-white" placeholder="Search movie..." />
                    <button className="btn join-item rounded-r-full ">Search</button>
                </div>
            </div>

            {/* Loading State */}
            {loading ? (
                <div className="text-center text-2xl font-bold py-10">Loading Movies...</div>
            ) : (
                <div className="pb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {AllMovie.map((movie) => (
                        <div
                            key={movie.id}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="card card-compact bg-base-100 w-96 shadow-xl"
                        >
                            <figure data-aos="fade-up" data-aos-delay="100">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                    className='w-full h-[276px]'
                                    src={movie.moviePoster}
                                    alt="poster"
                                />
                            </figure>
                            <div className="card-body shadow-xl shadow-black rounded-xl">
                                <h2 data-aos="fade-up" className="card-title text-black font-extrabold text-2xl">
                                    {movie.movieTitle}
                                </h2>
                                <p data-aos="slide-right">
                                    <span className='text-gray-600 text-xl font-semibold'>Genre : </span>
                                    {movie.genre}
                                </p>
                                <p data-aos="slide-right">
                                    <span className='text-gray-600 text-xl font-semibold'>Duration : </span>
                                    {movie.duration}
                                </p>
                                <p data-aos="slide-right">
                                    <span className='text-gray-600 text-xl font-semibold'>Release Year : </span>
                                    {movie.releaseYear}
                                </p>
                                <p data-aos="slide-right">
                                    <span className='text-gray-600 text-xl font-semibold'>Rating : </span>
                                    {movie.rating}
                                </p>
                                <div className="flex pt-4 text-yellow-500">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <div className="card-actions justify-end">
                                    <Link
                                        to={`/home/seeDetails/`}
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        className="btn bg-black text-white"
                                    >
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllMovies;