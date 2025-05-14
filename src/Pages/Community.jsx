import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import Swal from "sweetalert2";
import "aos/dist/aos.css";

const Community = ({ user }) => {
  const [discussions, setDiscussions] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const formRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    setTimeout(() => {
      const stored = localStorage.getItem("movieDiscussions");
      if (stored) {
        setDiscussions(JSON.parse(stored));
      } else {
        const initial = [
          {
            title: "Favorite Movies of 2023?",
            user: "Leo doo",
            time: "2 hours ago",
            content:
              "What are your favorite movies released this year? Let's discuss the top picks!",
          },
          {
            title: "Best Movie Soundtracks?",
            user: "Kord a",
            time: "5 hours ago",
            content:
              "Which movies have soundtracks that you can't stop listening to?",
          },
          {
            title: "Underrated Directors",
            user: "Alex Green",
            time: "1 day ago",
            content:
              "Who are some directors that don't get the recognition they deserve?",
          },
        ];
        setDiscussions(initial);
        localStorage.setItem("movieDiscussions", JSON.stringify(initial));
      }
      setLoading(false);
    }, 1000);
  }, []);

  const handleSubmit = () => {
    if (!title || !content) {
      Swal.fire({
        icon: "warning",
        title: "Please fill out both fields",
      });
      return;
    }

    const newPost = {
      title,
      user: user?.name || "You",
      time: "just now",
      content,
    };

    const updated = [newPost, ...discussions];
    setDiscussions(updated);
    localStorage.setItem("movieDiscussions", JSON.stringify(updated));

    setTitle("");
    setContent("");

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your discussion has been posted",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Header */}
      <div className="p-6 text-center text-white bg-black">
        <h1 className="text-4xl font-bold">Community & Forums</h1>
        <p className="pt-4 text-gray-400">
          Connect with fellow movie enthusiasts and share your thoughts!
        </p>
      </div>

      {/* Discussions */}
      <div>
        <h1 data-aos="slide-right" className="pt-4 pl-4 text-3xl font-bold">
          Latest Discussions
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : (
        <section>
          {discussions.map((post, index) => (
            <div className="p-4" key={index}>
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="card bg-gradient-to-r from-indigo-700 from-10% via-indigo-600 via-30% to-sky-500 to-90% text-primary-content p-2"
              >
                <div className="card-body">
                  <h2
                    data-aos="slide-right"
                    className="text-3xl font-bold text-blue-200 card-title"
                  >
                    {post.title}
                  </h2>
                  <p
                    data-aos="slide-right"
                    className="font-medium text-gray-200"
                  >
                    {post.user} | {post.time}
                  </p>
                  <p className="text-white">{post.content}</p>
                  <div className="card-actions">
                    <button
                      onClick={scrollToForm}
                      data-aos="fade-up"
                      data-aos-delay="600"
                      className="text-white bg-black border-none hover:bg-gray-900 btn"
                    >
                      Join Discussions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Start a Discussion */}
      <section ref={formRef}>
        <div>
          <h1 data-aos="slide-right" className="pt-4 pl-4 text-3xl font-bold">
            Start a Discussion
          </h1>
        </div>

        <div className="shadow-2xl bg-slate-200">
          <div className="p-8 mt-3">
            <h1 className="p-2 font-bold text-black">Title</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the discussion title"
              className="w-full input input-bordered input-info"
            />

            <h1 className="p-2 font-bold text-black">Content</h1>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full textarea textarea-info"
              placeholder="Write your thoughts here..."
            ></textarea>

            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="font-bold text-white bg-black btn hover:bg-gray-900"
              >
                Post Discussion
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
