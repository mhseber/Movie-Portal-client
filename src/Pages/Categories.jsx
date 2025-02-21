import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/cateData.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch categories");
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <div className="text-center pt-10 pb-5">
                <h1 className="text-4xl text-black font-bold">
                    Explore Various Categories
                </h1>
                <p className="text-gray-400 pt-5">
                    Discover your favorite genres and dive into endless entertainment.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-10">
                {categories.map((category) => (
                    <div key={category.id} className="card bg-sky-500 shadow-xl p-4 transform transition duration-400 hover:-translate-y-2">
                        <figure className="px-5 pt-5">
                            <img
                                src={category.img}
                                alt={category.name}
                                className="rounded-xl w-[150px] h-[150px] object-cover"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-lg font-extrabold">
                                {category.name}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;