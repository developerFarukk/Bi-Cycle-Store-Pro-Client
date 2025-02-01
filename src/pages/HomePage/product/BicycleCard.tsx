import { Badge } from "@/components/ui/badge";



const BicycleCard = () => {

    return (
        <div>
            <div className="text-center p-4 mb-4">
                <h2 className="text-4xl font-bold">Our Bicycle Products</h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2">
                <div className="group relative block overflow-hidden">
                    {/* Wishlist Button */}
                    <button
                        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                    >
                        <span className="sr-only">Wishlist</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                    </button>

                    {/* Image */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                            alt=""
                            className="h-64 w-full rounded-tl-md rounded-tr-md object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                        />
                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <p className="text-white text-lg font-medium">See Details...</p>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="relative border border-gray-100 bg-white p-6">
                        <h3 className="mt-1.5 text-lg font-medium text-gray-900 text-center">Duronto Bicycle</h3>
                        <div className="flex justify-between">
                            <Badge variant="destructive" className="text-black">In Stock</Badge>
                            <p className="text-gray-700">
                                Tk 10000
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="mt-1.5 line-clamp-3 text-gray-700">Brand :<span className="ml-2">Duranto</span></p>
                            <p className="mt-1.5 line-clamp-3 text-gray-700">Model :<span className="ml-2">X54</span></p>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="mt-4 flex gap-4">
                            <button
                                className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BicycleCard;
