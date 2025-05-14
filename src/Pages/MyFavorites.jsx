import Aos from "aos";
import React, { useEffect, useState } from "react";
import { GiSelfLove } from "react-icons/gi";

const MyFavorites = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <span className="w-16 h-16 text-blue-900 loading loading-bars"></span>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="p-6 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-black">
        <div className="flex justify-between">
          <div className="p-6">
            <h1 className="text-6xl font-bold">Your Favorites List</h1>
            <p className="pt-4 text-xl text-gray-200">
              All your favorite items in one place. Organize, view, and manage
              with ease.
            </p>
          </div>
          <div className="pt-8 pr-40 text-8xl">
            <GiSelfLove />
          </div>
        </div>
      </div>

      {/* body */}
      <div className="min-h-screen hero bg-slate-400">
        <div className="text-center hero-content">
          <div className="max-w-md">
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl font-bold"
            >
              No Favorites Found
            </h1>
            <p data-aos="slide-right" className="py-6 font-semibold">
              You have not added any movies to your favorites list yet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
