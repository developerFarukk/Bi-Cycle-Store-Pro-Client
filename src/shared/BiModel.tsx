import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface TTitle {
    title: string;
}

const BiModel = ({ title }: TTitle) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">{title}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90%] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
                    <DialogHeader>
                        <DialogTitle className="text-center">Bicycle Products</DialogTitle>
                    </DialogHeader>
                    <div className="bg-gray-100 dark:bg-gray-800 py-4 md:py-8 rounded-md">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row -mx-4">
                                {/* Product Image Section */}
                                <div className="md:flex-1 px-4">
                                    <div className="h-64 md:h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                        <img
                                            className="w-full h-full object-cover rounded-lg"
                                            src="../../public/Bi-1.png"
                                            alt="Product Image"
                                        />
                                    </div>
                                    <div className="flex -mx-2 mb-4">
                                        <div className="w-1/2 px-2">
                                            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                                Add to Cart
                                            </button>
                                        </div>
                                        <div className="w-1/2 px-2">
                                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                                Add to Wishlist
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Details Section */}
                                <div className="md:flex-1 px-4">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod
                                        libero id mauris malesuada tincidunt.
                                    </p>

                                    {/* Price and Availability */}
                                    <div className="flex flex-col md:flex-row mb-4 gap-4">
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-600 dark:text-gray-300">$29.99</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                                        </div>
                                    </div>

                                    {/* Color Selection */}
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                                        <div className="flex items-center mt-2">
                                            <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                            <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                                        </div>
                                    </div>

                                    {/* Size Selection */}
                                    <div className="mb-4">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                        <div className="flex flex-wrap items-center mt-2 gap-2">
                                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                                <button
                                                    key={size}
                                                    className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600"
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Product Description */}
                                    <div>
                                        <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer
                                            euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus
                                            aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat
                                            vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                            sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi
                                            consectetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BiModel;