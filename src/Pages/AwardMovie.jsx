import Aos from "aos";
import endgame from "../assets/endgame.jpg"
import spyder from "../assets/spyderman.jpg"
import venom from "../assets/venom.jpg"
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AwardMovie = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    return (
        <div className=" bg-gradient-to-r from-blue-900 to-blue-950 w-[500px]border border-8 pt-8">
            <div className="text-center">
                <h1
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className="text-4xl font-semibold text-white">Award-Winning Movies</h1>
                <p
                    data-aos="slide-left"
                    className="text-xs font-semibold text-gray-400 pt-4">Discover the movies that have captivated audiences and critics alike.</p>
            </div>
            <div className="flex justify-center gap-3 p-5">
                {/* card  1*/}
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className='w-full h-[276px]'
                            src={endgame}
                            alt="img" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-xl font-bold">EndGame</h2>
                        <p data-aos="slide-right" className="text-gray-400">Oscar Award for Best Picture</p>
                        <p data-aos="slide-right" className="text-black">2020</p>
                        <div className="card-actions justify-end">
                            <Link to="/home/learnMore"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="btn bg-black text-white">Learn More</Link>
                        </div>
                    </div>
                </div>
                {/* card  2*/}
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className='w-full h-[276px]'
                            src={venom}
                            alt="img" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-xl font-bold">Venom 2</h2>
                        <p data-aos="slide-right" className="text-gray-400">Oscar Award for Best Picture</p>
                        <p data-aos="slide-right" className="text-black">2021</p>
                        <div className="card-actions justify-end">
                            <Link to="/home/learnMore"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="btn bg-black text-white">Learn More</Link>
                        </div>
                    </div>
                </div>
                {/* card 3*/}
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className='w-full h-[276px]'
                            src={spyder}
                            alt="img" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-black text-xl font-bold">SpyderMan 2</h2>
                        <p data-aos="slide-right" className="text-gray-400">Oscar Award for Best Picture</p>
                        <p data-aos="slide-right" className="text-black">2023</p>
                        <div className="card-actions justify-end">
                            <Link to="/home/learnMore"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="btn bg-black text-white">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardMovie;