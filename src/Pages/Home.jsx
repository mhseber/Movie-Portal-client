import Hero from "../components/Hero";
import AwardMovie from "./AwardMovie";
import Card from "./Card";
import Categories from "./Categories";
import Upcoming from "./Upcoming";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Card></Card>
            <AwardMovie></AwardMovie>
            <Categories></Categories>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;