import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import endgame from "../assets/endgame.jpg";
import spyder from "../assets/spyderman.jpg";
import venom from "../assets/venom.jpg";
import superman from "../assets/superman.jpg";

const Hero = () => {
  return (
    <div className="h-[600px] overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={2000}
        showArrows={true}
        className="h-full"
      >
        {[endgame, spyder, venom, superman].map((img, index) => (
          <div key={index} className="h-[600px]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover object-center w-full h-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
