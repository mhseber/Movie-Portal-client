// import { useEffect, useState } from "react";

// const Categories = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await fetch("/cateData.json");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch categories");
//                 }
//                 const data = await response.json();
//                 setCategories(data);
//             } catch (error) {
//                 console.error("Error fetching categories:", error);
//             }
//         };

//         fetchCategories();
//     }, []);

//     return (
//         <div>
//             <div className="pt-10 pb-5 text-center">
//                 <h1 className="text-4xl font-bold text-black">
//                     Explore Various Categories
//                 </h1>
//                 <p className="pt-5 text-gray-400">
//                     Discover your favorite genres and dive into endless entertainment.
//                 </p>
//             </div>

//             {/* Categories Grid */}
//             <div className="grid grid-cols-1 gap-6 px-10 lg:grid-cols-4 md:grid-cols-2">
//                 {categories.map((category) => (
//                     <div key={category.id} className="p-4 transition transform shadow-xl card bg-sky-500 duration-400 hover:-translate-y-2">
//                         <figure className="px-5 pt-5">
//                             <img
//                                 src={category.img}
//                                 alt={category.name}
//                                 className="rounded-xl w-[150px] h-[150px] object-cover"
//                             />
//                         </figure>
//                         <div className="items-center text-center card-body">
//                             <h2 className="text-lg font-extrabold card-title">
//                                 {category.name}
//                             </h2>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Categories;

import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const descriptions = {
    Fantasy: "🧙‍♂️ Immerse yourself in magical worlds and mythical creatures.",
    Thriller: "🔪 Get your adrenaline pumping with suspenseful stories.",
    Romance: "💖 Fall in love with heartfelt and emotional tales.",
    Drama: "🎭 Experience powerful storytelling full of real-life emotions.",
    "Sci-Fi": "🚀 Explore futuristic worlds, technology, and space travel.",
    Horror: "👻 Dive into terrifying and chilling experiences.",
    Animated: "🎨 Enjoy fun and vibrant animated stories for all ages.",
    Documentary: "🎥 Discover real-life events and factual storytelling.",
  };

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

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  return (
    <div>
      <div className="pt-10 pb-5 text-center">
        <h1 className="text-4xl font-bold text-black">
          Explore Various Categories
        </h1>
        <p className="pt-5 text-gray-400">
          Discover your favorite genres and dive into endless entertainment.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-6 px-10 lg:grid-cols-4 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 transition transform shadow-xl cursor-pointer card bg-sky-500 duration-400 hover:-translate-y-2"
            onClick={() => handleCardClick(category)}
          >
            <figure className="px-5 pt-5">
              <img
                src={category.img}
                alt={category.name}
                className="rounded-xl w-[150px] h-[150px] object-cover"
              />
            </figure>
            <div className="items-center text-center card-body">
              <h2 className="text-lg font-extrabold card-title">
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-6 bg-white rounded-lg shadow-xl w-96">
            <button
              onClick={closeModal}
              className="absolute text-xl font-bold text-black top-2 right-2"
            >
              &times;
            </button>
            <img
              src={selectedCategory.img}
              alt={selectedCategory.name}
              className="object-cover w-full h-48 rounded"
            />
            <h2 className="mt-4 text-2xl font-bold">{selectedCategory.name}</h2>
            <p className="mt-2 text-gray-700">
              {descriptions[selectedCategory.name] ||
                "More info coming soon..."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
