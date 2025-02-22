import Aos from "aos";
import { useEffect } from "react";


const Community = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            {/* Header */}
            <div className='text-center bg-black text-white p-6'>
                <h1 className='text-4xl font-bold'>Community & Forums</h1>
                <p className='text-gray-400 pt-4'>Connect with fellow movie enthusiasts and share your thoughts!</p>
            </div>
            {/* Community & Forums */}
            <div>
                <h1 className="text-3xl font-bold pt-4 pl-4">Latest Discussions</h1>
            </div>
            {/* card */}
            <section>
                {/* 1 */}
                <div className="p-4">
                    <div className="card bg-sky-400 text-primary-content p-2">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-blue-500">Favorite Movies of 2023?</h2>
                            <p className="text-gray-500 font-medium">Leo doo | 2 hours ago</p>
                            <p>What are your favorite movies released this year? Let's discuss the top picks!</p>
                            <div className="card-actions ">
                                <button className="btn bg-blue-900 text-white border-none">Join Discussions</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="p-4">
                    <div className="card bg-sky-400 text-primary-content p-2">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-blue-500">Best Movie Soundtracks?</h2>
                            <p className="text-gray-500 font-medium">Kord a | 5 hours ago</p>
                            <p>Which movies have soundtracks that you can't stop listening to?</p>
                            <div className="card-actions ">
                                <button className="btn bg-blue-900 text-white border-none">Join Discussions</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="p-4">
                    <div className="card bg-sky-400 text-primary-content p-2">
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-blue-500">Underrated Directors</h2>
                            <p className="text-gray-500 font-medium">By Alex Green | 1 day ago</p>
                            <p>Who are some directors that don't get the recognition they deserve?</p>
                            <div className="card-actions ">
                                <button className="btn bg-blue-900 text-white border-none">Join Discussions</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Start a Discussion */}
            <section>
                <div>
                    <h1 className="text-3xl font-bold pt-4 pl-4">Start a Discussion</h1>
                </div>
                {/* form */}
                <div className=" bg-sky-200 shadow-2xl">
                    <div className="p-8 mt-3">
                        <h1 className="p-2 text-black font-bold">Title</h1>
                        <input
                            type="text"
                            placeholder="enter the discussion title"
                            className="input input-bordered input-info w-full " />
                        <h1 className="p-2 text-black font-bold">Content</h1>
                        <textarea
                            className="textarea textarea-info w-full"
                            placeholder="Right your thoughts here..."></textarea>

                        <div className=" mt-6">
                            <button className="btn btn-primary  font-bold">Post Discussion</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Community;