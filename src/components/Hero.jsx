import endgame from "../assets/endgame.jpg"
import spyder from "../assets/spyderman.jpg"
import venom from "../assets/venom.jpg"
const Hero = () => {
    return (
        <div className="carousel carousel-center rounded-box lg:pl-60 pt-10">
            <div className="carousel-item">
                <img src={endgame} alt="photo" />
            </div>
            <div className="carousel-item">
                <img
                    src={spyder}
                    alt="photo" />
            </div>
            <div className="carousel-item">
                <img
                    src={venom}
                    alt="photo" />
            </div>


        </div>
    );
};

export default Hero;