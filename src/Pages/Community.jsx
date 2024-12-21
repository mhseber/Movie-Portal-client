import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h3 className="text-5xl font-semibold mb-2">Movies World Community</h3>
                    <p className="text-sm text-gray-400 pt-10 pb-6">
                        Join our vibrant community of movie enthusiasts! From classics to the latest blockbusters, connect, share reviews, discuss theories, and celebrate the magic of cinema together.
                    </p>
                    <Link to="/auth/login" className="btn bg-black text-white">Join Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Community;