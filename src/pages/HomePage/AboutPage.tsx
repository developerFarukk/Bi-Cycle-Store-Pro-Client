


const AboutPage = () => {

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    {/* Heading and Description */}
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Welcome to Our Bicycle Shop
                        </h1>
                        <p className="max-w-lg mx-auto mt-4 text-gray-500">
                            At <strong>PedalPower</strong>, we are passionate about cycling and committed to providing high-quality bicycles, accessories, and services to help you enjoy every ride. Our mission is to promote a healthy, sustainable, and adventurous lifestyle through cycling.
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                        {/* Card 1: Our Mission */}
                        <div>
                            <div className="relative">
                                <img
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                                    src="https://blog.bikroy.com/en/wp-content/uploads/2021/04/How-to-choose-the-right-bicycle-the-ultimate-bicycle-.jpg"
                                />
                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                                    <img
                                        className="object-cover object-center w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                        alt="Founder"
                                    />
                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">John Doe</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Founder & CEO</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                                Our Mission: Empowering Cyclists
                            </h1>
                            <hr className="w-32 my-6 text-blue-500" />
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                We believe in the transformative power of cycling. Our mission is to provide top-notch bicycles, gear, and services that inspire people to explore, stay active, and embrace a sustainable lifestyle.
                            </p>
                            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                                Learn More
                            </a>
                        </div>

                        {/* Card 2: Our Products */}
                        <div>
                            <div className="relative">
                                <img
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                                    src="https://www.wien.info/resource/image/295726/19x10/1200/630/f7026893af4f6091c33a7ed680d5233b/1C1BB84F938387E9097274E5A8441CBC/wienmobil-raeder.jpg"
                                />
                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                                    <img
                                        className="object-cover object-center w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt="Product Manager"
                                    />
                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Jane Smith</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                                Explore Our Bicycle Collection
                            </h1>
                            <hr className="w-32 my-6 text-blue-500" />
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                From mountain bikes to road bikes, hybrids to electric bikes, we offer a wide range of bicycles to suit every rider's needs. Discover the perfect bike for your next adventure.
                            </p>
                            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                                Shop Now
                            </a>
                        </div>

                        {/* Card 3: Our Services */}
                        <div>
                            <div className="relative">
                                <img
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINbzPd0G3-ZkuprInHySRPf0jUcYYsLc3Jg&s"
                                />
                                <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                                    <img
                                        className="object-cover object-center w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                        alt="Service Manager"
                                    />
                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Mike Johnson</h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Service Manager</p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                                Expert Bicycle Services
                            </h1>
                            <hr className="w-32 my-6 text-blue-500" />
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Our skilled technicians provide comprehensive bicycle maintenance and repair services to keep your bike in top condition. From tune-ups to custom builds, we've got you covered.
                            </p>
                            <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                                View Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
