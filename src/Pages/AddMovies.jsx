import React from 'react';
import { MdAddChart } from 'react-icons/md';

const AddMovies = () => {
    return (
        <div>
            {/* Header */}
            <div className=' bg-gradient-to-r from-blue-800 via-black to-purple-500 text-white p-6'>
                <div className='flex justify-between'>
                    <div className='p-6'>
                        <h1 className='text-6xl font-bold'>Add a New Movie</h1>
                        <p className='text-gray-200 text-xl pt-4'>Share your favorite movies and help others discover hidden gems!</p>
                    </div>
                    <div className='text-8xl pt-8 pr-40'>
                        <MdAddChart />
                    </div>
                </div>
            </div>
            {/* Form Section */}
            <div className=" mx-auto px-4 py-12 dark:bg-gray-900">
                <div
                    className="bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto dark:bg-gray-800"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6 dark:text-gray-200">
                        Add a Movie
                    </h2>
                    <form className="space-y-4">
                        {/* Movie Poster (Image URL) */}
                        <div>
                            <label
                                htmlFor="imageUrl"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Movie Poster (Image URL)
                            </label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="enter  image URL"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                                required
                            />
                        </div>

                        {/* Movie Title */}
                        <div>
                            <label
                                htmlFor="serviceName"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Movie Title
                            </label>
                            <input
                                type="text"
                                id="serviceName"
                                name="serviceName"
                                placeholder="enter Movie Title"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                                required
                            />
                        </div>

                        {/* Genre */}
                        <div>
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Genre
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="select Genre"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                                required
                            />
                        </div>
                        {/* Duration (minutes) */}
                        <div>
                            <label
                                htmlFor="serviceArea"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Duration (minutes)
                            </label>
                            <input
                                type="text"
                                id="serviceArea"
                                name="serviceArea"
                                placeholder="Duration in minutes"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                                required
                            />
                        </div>
                        {/* Release Year */}
                        <div>
                            <label
                                htmlFor="releaseYear"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Release Year
                            </label>
                            <select
                                id="releaseYear"
                                name="releaseYear"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                                required
                            >
                                <option value="" disabled selected>Select a year</option>
                                {Array.from({ length: 2025 - 1990 + 1 }, (_, i) => (
                                    <option key={i} value={1990 + i}>
                                        {1990 + i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Ratings */}
                        <div>
                            <label
                                htmlFor="rating"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Ratings
                            </label>
                            <div className="rating">
                                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-600 dark:text-gray-200"
                            >
                                Summary
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Right a short Summary of the movie"
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-none"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                            >
                                Update Movies
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovies;