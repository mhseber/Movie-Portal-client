// import Hero from "../components/Hero";
// import AwardMovie from "./AwardMovie";
// import Card from "./Card";
// import Categories from "./Categories";
// import Upcoming from "./Upcoming";

// const Home = () => {
//     return (
//         <div>
//             <Hero></Hero>
//             <Card></Card>
//             <AwardMovie></AwardMovie>
//             <Categories></Categories>
//             <Upcoming></Upcoming>
//         </div>
//     );
// };

// export default Home;

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AwardMovie from "./AwardMovie";
import Card from "./Card";
import Categories from "./Categories";
import Upcoming from "./Upcoming";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load time (e.g., 1.2s)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <span className="w-16 h-16 text-blue-900 loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <Card />
      <AwardMovie />
      <Categories />
      <Upcoming />
    </div>
  );
};

export default Home;
