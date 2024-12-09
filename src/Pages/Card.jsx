import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const Card = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch('./movieData.json')
            .then(res => res.json())
            .then(data => setMovie(data))
    }, []);
    return (
        <div>
            <h1 className='text-center text-5xl text-black pt-6'>Featured Movies</h1>
            <p className='text-center text-gray-400 pb-8 pt-4'>Check out the latest movies added to the collection.</p>

            {/* card */}
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 pl-10 ">
                {
                    movie.map(movie => <MovieCard movie={movie} key={movie.id}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Card;