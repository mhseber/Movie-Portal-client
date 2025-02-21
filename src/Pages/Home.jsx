import Hero from "../components/Hero";
import AwardMovie from "./AwardMovie";
import Card from "./Card";
import Categories from "./Categories";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Card></Card>
            <AwardMovie></AwardMovie>
            <Categories></Categories>
        </div>
    );
};

export default Home;