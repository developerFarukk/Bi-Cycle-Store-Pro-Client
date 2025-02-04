

import { Link } from "react-router";
import Ridenest from "./Ridenest";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">
            <footer className="bg-zinc-100 dark:bg-gray-900">
                <div className="container p-6 mx-auto">
                    <div className="lg:flex">
                        {/* Left Section */}
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <Link to="/">
                                    <Ridenest />
                                </Link>

                                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                                    Join 31,000+ others and never miss out on new tips, tutorials,
                                    and more.
                                </p>

                                {/* Social Media Icons */}
                                <div className="flex mt-4 space-x-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                                        <FaFacebook size={24} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                                        <FaTwitter size={24} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                                        <FaInstagram size={24} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-700 dark:hover:text-white">
                                        <FaYoutube size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {/* About Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                    <Link to="/about" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Company
                                    </Link>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Community
                                    </Link>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Careers
                                    </Link>
                                </div>

                                {/* Blog Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Tech
                                    </Link>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Music
                                    </Link>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Videos
                                    </Link>
                                </div>

                                {/* Products Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Mega Cloud
                                    </Link>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Digital Marketing
                                    </Link>
                                    <Link to="/" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        Web Development
                                    </Link>
                                </div>

                                {/* Contact Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        +1 526 654 8965
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        ridenest@email.com
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        123 Main St, New York, NY 10001
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                    {/* Copyright Section */}
                    <div>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            © Brand 2025 - All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;