import { Link } from "react-router";
import Ridenest from "./Ridenest";




const Footer = () => {

    return (
        <div>
            <footer className="bg-white dark:bg-gray-900">
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
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {/* About Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Company
                                    </a>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Community
                                    </a>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Careers
                                    </a>
                                </div>

                                {/* Blog Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Tech
                                    </a>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Music
                                    </a>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Videos
                                    </a>
                                </div>

                                {/* Products Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Mega Cloud
                                    </a>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Degital Marketing
                                    </a>
                                    <a
                                        href="#"
                                        className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        Web development
                                    </a>
                                </div>

                                {/* Contact Section */}
                                <div>
                                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        +1 526 654 8965
                                    </span>
                                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                                        example@email.com
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
                            © Brand 2020 - All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
