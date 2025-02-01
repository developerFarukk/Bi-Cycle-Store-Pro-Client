import { useState } from "react"; // Import useState for state management
import { Badge } from "@/components/ui/badge";
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
    // State to manage quantity
    const [quantity, setQuantity] = useState<number>(1);

    // Function to handle increment
    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    // Function to handle decrement
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    // Function to handle adding to cart
    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) to cart!`); // Replace with your actual logic
    };

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
                                </div>

                                {/* Product Details Section */}
                                <div className="md:flex-1 px-4 flex flex-col">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">description</p>

                                    {/* Price and Availability */}
                                    <div className="flex flex-col md:flex-row mb-4 gap-4 justify-between">
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">TK 10000</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Status:</span>
                                            <Badge variant="destructive" className="text-black ml-2">In Stock</Badge>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row mb-4 gap-4 justify-between">
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Brand:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">Duronto</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Model:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">X541NA</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row mb-4 gap-4 justify-between">
                                        <div className="flex gap-2 items-center justify-center text-center">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Available Stock:</span>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <div className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-3 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600">
                                                    45
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Type:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">Avil</span>
                                        </div>
                                    </div>

                                    {/* Quantity Input */}
                                    <div className="mt-4 flex items-center justify-start gap-2">
                                        <label htmlFor="Quantity" className="font-bold text-gray-700 dark:text-gray-300">
                                            Quantity :
                                        </label>
                                        <div className="flex items-center rounded-sm border w-fit">
                                            <button
                                                type="button"
                                                onClick={handleDecrement}
                                                className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                            >
                                                &minus;
                                            </button>
                                            <input
                                                type="number"
                                                id="Quantity"
                                                value={quantity}
                                                onChange={(e) => setQuantity(Number(e.target.value))}
                                                className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                            />
                                            <button
                                                type="button"
                                                onClick={handleIncrement}
                                                className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <div className="mt-auto">
                                        <Button
                                            onClick={handleAddToCart}
                                            className="block w-full rounded-sm bg-blue-800 text-sm font-medium transition hover:scale-105"
                                        >
                                            Add to Cart
                                        </Button>
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