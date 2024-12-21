import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const LearnMore = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);
    return (
        <div>
            <div className="card  bg-gradient-to-r from-blue-900 to-blue-950  ">
                <div className="card-body items-center text-center">
                    <h2 data-aos="zoom-in"
                        data-aos-delay="200" className="card-title justify-start text-white  text-3xl font-extrabold">Oscar Award for Best Picture</h2>
                    <p data-aos="slide-right" className="text-gray-300"><i>The Oscar Award for Best Picture is one of the most prestigious honors in the film industry, recognizing the best overall movie of the year. It is presented annually by the Academy of Motion Picture Arts and Sciences (AMPAS) and serves as the highlight of the Academy Awards ceremony. This coveted accolade celebrates excellence in various aspects of filmmaking, including storytelling, direction, acting, cinematography, editing, and production. Winning the Best Picture Oscar cements a film's legacy, often boosting its popularity and cultural significance. Iconic films like Gone with the Wind (1939), The Godfather (1972), and Titanic (1997) have all earned this award, demonstrating a wide range of genres and themes that resonate with audiences and critics alike. The selection process involves votes from thousands of Academy members, ensuring diverse perspectives. Over the years, the Best Picture award has sparked debates and controversies, reflecting shifts in societal values and artistic preferences. From classic epics to modern masterpieces, each winner represents a unique blend of creativity and technical achievement, shaping the history of cinema.</i></p>

                </div>
            </div>
        </div>
    );
};

export default LearnMore;