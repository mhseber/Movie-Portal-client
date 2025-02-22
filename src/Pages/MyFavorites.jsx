import Aos from 'aos';
import React, { useEffect } from 'react';
import { GiSelfLove } from 'react-icons/gi';

const MyFavorites = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    return (
        <div>
            {/* Header */}
            <div className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-black text-white p-6'>
                <div className='flex justify-between'>
                    <div className='p-6'>
                        <h1 className='text-6xl font-bold'>Your Favorites List</h1>
                        <p className='text-gray-200 text-xl pt-4'>All your favorite items in one place. Organize, view, and manage with ease.</p>
                    </div>
                    <div className='text-8xl pt-8 pr-40'>
                        <GiSelfLove />
                    </div>
                </div>
            </div>
            {/* body */}
            <div className="hero bg-slate-400 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="text-5xl font-bold">No Favorites Found</h1>
                        <p
                            data-aos="slide-right"
                            className="py-6 font-semibold">
                            You have not added any movies to your favorites list yet.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFavorites;