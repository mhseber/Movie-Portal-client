// import Aos from "aos";
// import endgame from "../assets/endgame.jpg";
// import spyder from "../assets/spyderman.jpg";
// import venom from "../assets/venom.jpg";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// const AwardMovie = () => {
//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className=" bg-gradient-to-r from-blue-900 to-blue-950 w-[500px]border border-8 pt-8">
//       <div className="text-center">
//         <h1
//           data-aos="fade-up"
//           data-aos-delay="600"
//           className="text-4xl font-semibold text-white"
//         >
//           Award-Winning Movies
//         </h1>
//         <p
//           data-aos="slide-left"
//           className="pt-4 text-xs font-semibold text-gray-400"
//         >
//           Discover the movies that have captivated audiences and critics alike.
//         </p>
//       </div>
//       <div className="flex justify-center gap-3 p-5">
//         {/* card  1*/}
//         <div className="shadow-xl card card-compact bg-base-100 w-96">
//           <figure>
//             <img
//               data-aos="zoom-in"
//               data-aos-delay="200"
//               className="w-full h-[276px]"
//               src={endgame}
//               alt="img"
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="text-2xl font-extrabold text-black card-title">
//               EndGame
//             </h2>
//             <p data-aos="slide-right" className="text-gray-500">
//               Oscar Award for Best Picture
//             </p>
//             <p data-aos="slide-right" className="text-black">
//               <span className="font-extrabold">Year: </span> 2020
//             </p>
//             <div className="justify-end card-actions">
//               <Link
//                 to="/home/learnMore"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 className="text-white bg-black btn hover:bg-gray-900"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//         {/* card  2*/}
//         <div className="shadow-xl card card-compact bg-base-100 w-96">
//           <figure>
//             <img
//               data-aos="zoom-in"
//               data-aos-delay="200"
//               className="w-full h-[276px]"
//               src={venom}
//               alt="img"
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="text-2xl font-extrabold text-black card-title">
//               Venom 2
//             </h2>
//             <p data-aos="slide-right" className="text-gray-500">
//               Oscar Award for Best Picture
//             </p>
//             <p data-aos="slide-right" className="text-black">
//               <span className="font-extrabold">Year: </span>2021
//             </p>
//             <div className="justify-end card-actions">
//               <Link
//                 to="/home/learnMore"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 className="text-white bg-black btn hover:bg-gray-900"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//         {/* card 3*/}
//         <div className="shadow-xl card card-compact bg-base-100 w-96">
//           <figure>
//             <img
//               data-aos="zoom-in"
//               data-aos-delay="200"
//               className="w-full h-[276px]"
//               src={spyder}
//               alt="img"
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="text-2xl font-extrabold text-black card-title">
//               SpyderMan 2
//             </h2>
//             <p data-aos="slide-right" className="text-gray-500">
//               Oscar Award for Best Picture
//             </p>
//             <p data-aos="slide-right" className="text-black">
//               <span className="font-extrabold">Year: </span>2023
//             </p>
//             <div className="justify-end card-actions">
//               <Link
//                 to="/home/learnMore"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 className="text-white bg-black btn hover:bg-gray-900"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AwardMovie;

import Aos from "aos";
import endgame from "../assets/endgame.jpg";
import spyder from "../assets/spyderman.jpg";
import venom from "../assets/venom.jpg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AwardMovie = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full pt-8 border-8 bg-gradient-to-r from-blue-900 to-blue-950">
      <div className="text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-4xl font-semibold text-white"
        >
          Award-Winning Movies
        </h1>
        <p
          data-aos="slide-left"
          className="pt-4 text-xs font-semibold text-gray-400"
        >
          Discover the movies that have captivated audiences and critics alike.
        </p>
      </div>

      {/* Flex container to make the cards responsive */}
      <div className="flex flex-wrap justify-center gap-4 p-5">
        {/* Card 1 */}
        <div className="w-full shadow-xl card card-compact bg-base-100 sm:w-80 md:w-96">
          <figure>
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full h-[276px]"
              src={endgame}
              alt="Endgame"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-extrabold text-black card-title">
              EndGame
            </h2>
            <p data-aos="slide-right" className="text-gray-500">
              Oscar Award for Best Picture
            </p>
            <p data-aos="slide-right" className="text-black">
              <span className="font-extrabold">Year: </span> 2020
            </p>
            <div className="justify-end card-actions">
              <Link
                to="/home/learnMore"
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-white bg-black btn hover:bg-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full shadow-xl card card-compact bg-base-100 sm:w-80 md:w-96">
          <figure>
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full h-[276px]"
              src={venom}
              alt="Venom 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-extrabold text-black card-title">
              Venom 2
            </h2>
            <p data-aos="slide-right" className="text-gray-500">
              Oscar Award for Best Picture
            </p>
            <p data-aos="slide-right" className="text-black">
              <span className="font-extrabold">Year: </span>2021
            </p>
            <div className="justify-end card-actions">
              <Link
                to="/home/learnMore"
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-white bg-black btn hover:bg-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full shadow-xl card card-compact bg-base-100 sm:w-80 md:w-96">
          <figure>
            <img
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full h-[276px]"
              src={spyder}
              alt="SpyderMan 2"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-extrabold text-black card-title">
              SpyderMan 2
            </h2>
            <p data-aos="slide-right" className="text-gray-500">
              Oscar Award for Best Picture
            </p>
            <p data-aos="slide-right" className="text-black">
              <span className="font-extrabold">Year: </span>2023
            </p>
            <div className="justify-end card-actions">
              <Link
                to="/home/learnMore"
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-white bg-black btn hover:bg-gray-900"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardMovie;
