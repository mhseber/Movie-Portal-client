import Aos from "aos";
import { useEffect, useState } from "react";

const Upcoming = () => {
  const [Upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
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
      <div className="pt-10 pb-5 mt-6 text-center bg-blue-900">
        <h1 data-aos="slide-left" className="text-4xl font-bold text-black">
          Upcoming Releases
        </h1>
        <p data-aos="slide-left" className="pt-5 text-gray-400">
          Discover the most anticipated movies hitting theaters soon!
        </p>
        <div className="p-3 mt-4 bg-sky-700 rounded-3xl">
          <h1 className="text-4xl font-extrabold text-white">
            <i>
              🎬 Upcoming BollyWood & hollywood
              <span className="text-blue-950"> Movies</span>
            </i>
          </h1>
        </div>

        {/* Upcoming Grid */}
        <div className="grid grid-cols-1 gap-6 px-10 pt-5 lg:grid-cols-4 md:grid-cols-2">
          {Upcoming.map((Upcoming) => (
            <div key={Upcoming.id} className="p-4 shadow-xl card bg-sky-200 ">
              <figure className="px-5 pt-5">
                <img
                  src={Upcoming.img}
                  alt={Upcoming.name}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="rounded-xl w-[500px] h-[250px] object-cover"
                />
              </figure>
              <div className="items-center text-center card-body">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="text-lg font-extrabold card-title"
                >
                  {Upcoming.name}
                </h2>
                <p data-aos="slide-left" className="text-gray-700">
                  ReleaseDate: {Upcoming.ReleaseDate}
                </p>
                <p data-aos="slide-left" className="font-bold">
                  <i>{Upcoming.Description}</i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
