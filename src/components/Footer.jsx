import { AiFillInstagram } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div className="pt-5">
      <footer className="py-10 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Website Info */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h3 className="flex items-center mb-3 text-2xl font-extrabold">
                <BiSolidCameraMovie className="mr-2 text-3xl text-blue-400" />
                <span>
                  <i>Movies World</i>
                </span>
              </h3>
              <p className="text-sm text-gray-400">
                Your go-to platform for entertainment and inspiration. Stay
                connected and updated with the latest.
              </p>
            </div>

            {/* Contact Information */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h3 className="mb-3 text-lg font-semibold">Contact Us</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:moviesworld@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    moviesworld@gmail.com
                  </a>
                </li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Ameka Lane, Creativity City, World</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="w-full lg:w-1/3">
              <h3 className="mb-3 text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4 text-xl">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <SiFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <AiFillInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          <div className="text-sm text-center text-gray-500">
            &copy; 2024 Movies World. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
