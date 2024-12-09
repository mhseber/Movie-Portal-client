import Card from "./Card";



const AllMovies = () => {

    return (
        <div>
            <div className='text-center bg-black text-white p-6'>
                <h1 className='text-4xl font-bold'>All Movies</h1>
                <p className='text-gray-400'>Explore all the movies added by our users</p>
                <div className="join pt-4">
                    <input className="input input-bordered join-item bg-gray-600 text-white" placeholder="Search movie..." />
                    <button className="btn join-item rounded-r-full ">Search</button>
                </div>
            </div>
            <Card></Card>
        </div>
    );
};

export default AllMovies;