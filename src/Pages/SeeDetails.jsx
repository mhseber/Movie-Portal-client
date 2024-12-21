import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SeeDetails = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    }, []);
    return (
        <div>
            <div className="flex justify-center items-center p-4">
                <div className="card bg-black text-primary-content ">
                    <div className="card-body">
                        <h2 data-aos="fade-up"
                            data-aos-delay="600"
                            className="card-title text-4xl text-white font-extrabold">General Film Industry Terminology</h2>
                        <div
                            data-aos="slide-left"
                            className="text-gray-500 pt-5">
                            <p>
                                Before diving deep into the specific aspects of the film industry, let's look at some general terms. These are the film vocabulary words that you'll often hear in conversations about movies.
                                These basics will provide a solid foundation for your further exploration.</p>
                            <p> Feature Film: A full-length movie typically lasting between 70 and 210 minutes.</p>
                            <p>Short Film: A film that is significantly shorter than a feature film, usually under 40 minutes.</p>
                            <p>Screenplay: The script of a film, including dialogue, character descriptions, and action scenes.</p>
                            <p>Director: The person responsible for overseeing the creative aspects of a film.</p>
                            <p>Producer: The person who oversees the production of a film, from financing to post-production.</p>
                            <p> Cinematographer: Also known as a Director of Photography (DP), they oversee the camera and light crews.</p>
                            <p>Editor: The person who cuts and pieces together the film to create the final product.</p>
                            <p>Cast: All the actors and actresses appearing in a film.</p>
                            <p>Crew: The technical staff working behind the scenes to create the film.</p>
                            <p>Box Office: The total revenue a movie generates from ticket sales.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SeeDetails;