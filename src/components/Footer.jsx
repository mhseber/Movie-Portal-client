
const Footer = () => {
    return (
        <div className="pt-5">
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">

                        {/* Website Info */}
                        <div className="w-full md:w-1/3 mb-4">
                            <h3 className=" mb-2 text-2xl font-extrabold text-white"><i>Movies World</i></h3>
                            <p className="text-sm text-gray-400">
                                Your go-to platform for entertainment and inspiration. Stay connected and updated with the latest.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="w-full md:w-1/3 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <ul className="text-sm text-gray-400 space-y-2">
                                <li>Email: <a href="mailto:info@ameka.com" className="text-blue-400 hover:underline">moviesworld@gmail.com</a></li>
                                <li>Phone: +1 (123) 456-7890</li>
                                <li>Address: 123 Ameka Lane, Creativity City, World</li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div className="w-full md:w-1/3 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-400">Facebook</a>
                                <a href="#" className="text-gray-400 hover:text-blue-400">Twitter</a>
                                <a href="#" className="text-gray-400 hover:text-blue-400">Instagram</a>
                                <a href="#" className="text-gray-400 hover:text-blue-400">LinkedIn</a>
                            </div>
                        </div>

                    </div>
                    <hr className="border-gray-700 my-4" />
                    <div className="text-center text-sm text-gray-500">
                        &copy; 2024 Movies World Website. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;