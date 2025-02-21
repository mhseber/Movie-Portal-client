import Aos from "aos";
import { useEffect, useState } from "react";

const Upcoming = () => {
    const [Upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);

    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const response = await fetch("/Upcoming.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch UpcomingData");
                }
                const data = await response.json();
                setUpcoming(data);
            } catch (error) {
                console.error("Error fetching UpcomingData:", error);
            }
        };

        fetchUpcoming();
    }, []);

    return (
        <div>
            <div className="text-center pt-10 pb-5 bg-blue-900 mt-6">
                <h1 data-aos="slide-left" className="text-4xl text-black font-bold">
                    Upcoming Releases
                </h1>
                <p data-aos="slide-left" className="text-gray-400 pt-5">
                    Discover the most anticipated movies hitting theaters soon!
                </p>
                <div className="mt-4 bg-sky-700 rounded-3xl p-3">
                    <h1 className="text-4xl font-semibold text-white">War-2 (2025)-Arriving in - <span className="text-yellow-300">58 Days</span></h1>
                    <p className="text-gray-300 pt-3">War 2 will be the next installment in the YRF Spyverse after Salman Khan</p>
                </div>
                <p className="border-2 border-dotted w-60 mx-auto mb-2 mt-20"></p>
                <h1 data-aos="fade-up"
                    data-aos-delay="600"
                    className="text-2xl text-white font-bold ">BollyWood Movies Upcoming</h1>
                <p className="border-2 border-dotted w-60 mx-auto mt-5"></p>

                {/* Upcoming Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-10 pt-5">
                    {Upcoming.map((Upcoming) => (
                        <div key={Upcoming.id} className="card bg-sky-200 shadow-xl p-4 ">
                            <figure className="px-5 pt-5">
                                <img
                                    src={Upcoming.img}
                                    alt={Upcoming.name}
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                    className="rounded-xl w-[500px] h-[250px] object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2
                                    data-aos="fade-up"
                                    data-aos-delay="600"
                                    className="card-title text-lg font-extrabold">
                                    {Upcoming.name}
                                </h2>
                                <p data-aos="slide-left" className="text-gray-700">ReleaseDate: {Upcoming.ReleaseDate}</p>
                                <p data-aos="slide-left" className="font-bold"><i>{Upcoming.Description}</i></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Upcoming;