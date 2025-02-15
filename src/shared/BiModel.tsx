
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useGetSingleBicycleQuery } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
import LoadingProgress from "./LoadingProgress";
import { TBicycle } from "@/types/productsManagment";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, updateQuantity } from "@/redux/features/cart/cartSlice";
import { Link } from "react-router";

interface TTitle {
    title: string;
    id: string;
}

const BiModel = ({ title, id }: TTitle) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const cartItem = useAppSelector((state: RootState) => state.cart);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { data: bi, isLoading, isError } = useGetSingleBicycleQuery(id);
    const bicycle = bi?.data;
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState<number>(1);

    const handleIncrement = () => {
        if (quantity < bicycle.quantity) {
            setQuantity((prev) => prev + 1);
        } else {
            toast.error("You cannot add more than available stock.");
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };


    const handleAddToCart = (bi: TBicycle) => {
        if (user?.role === "admin") {
            toast.error("Admins cannot place orders.");
            return;
        }

        if (!user) {
            toast.error("You must be logged in to add to cart.");
            return;
        }

        const productInCart = cartItem.items.find((item: any) => item._id === bi._id);

        if (productInCart) {
            dispatch(updateQuantity({ id: bi._id, quantity }));
            toast.success("Quantity updated successfully");
            setIsDialogOpen(false);
            return;
        }

        const toastId = toast.loading("Adding to cart...");
        dispatch(
            addToCart({
                _id: bi._id,
                product: bi._id,
                bicycleImage: bi.bicycleImage,
                brand: bi.brand,
                description: bi.description,
                name: bi.name,
                price: bi.price,
                model: bi.model,
                quantity: quantity,
                status: bi.status,
                type: bi.type,
            })
        );
        toast.success("Added to cart successfully", { id: toastId, duration: 1500 });
        setIsDialogOpen(false);
    };

    if (isLoading) {
        return <div><LoadingProgress /></div>;
    }

    if (isError) {
        return <div>Error loading bicycle details.</div>;
    }

    if (!bicycle) {
        return <div>Bicycle not found.</div>;
    }

    return (
        <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline">{title}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90%] md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
                    <DialogHeader>
                        <DialogTitle className="text-center">Bicycle Products Details</DialogTitle>
                    </DialogHeader>
                    <div className="bg-gray-100 dark:bg-gray-800 py-4 md:py-8 rounded-md">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row -mx-4">
                                <div className="md:flex-1 px-4">
                                    <div className="h-64 md:h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                        <img
                                            className="w-full h-full object-cover rounded-lg"
                                            src={bicycle.bicycleImage}
                                            alt={bicycle.name}
                                        />
                                    </div>
                                </div>

                                <div className="md:flex-1 px-4 flex flex-col">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{bicycle.name}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{bicycle.description}</p>

                                    <div className="flex flex-col md:flex-row mb-4 gap-4 justify-between">
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">TK {bicycle.price}</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Status:</span>
                                            <Badge variant="destructive" className="text-black ml-2">{bicycle.status}</Badge>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row mb-4 gap-4 justify-between">
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Brand:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">{bicycle.brand}</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Model:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">{bicycle.model}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row mb-4 gap-4 justify-between">
                                        <div className="flex gap-2 items-center justify-center text-center">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Available Stock:</span>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <div className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-3 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600">
                                                    {bicycle.quantity}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Type:</span>
                                            <span className="text-gray-600 dark:text-gray-300 ml-2">{bicycle.type}</span>
                                        </div>
                                    </div>

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
                                                onChange={(e) => {
                                                    const newQuantity = Number(e.target.value);
                                                    if (newQuantity <= bicycle.quantity && newQuantity >= 1) {
                                                        setQuantity(newQuantity);
                                                    } else {
                                                        toast.error("Quantity cannot exceed available stock.");
                                                    }
                                                }}
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

                                    <div className="mt-auto">
                                        <div className="flex  gap-4">
                                            <Button
                                                onClick={() => handleAddToCart(bicycle)}
                                                className="block w-full rounded-sm bg-blue-800 text-sm font-medium transition hover:scale-105"
                                            >
                                                Add to Cart
                                            </Button>
                                            <Link to="/customer/storermanagments">
                                                <Button
                                                    onClick={() => handleAddToCart(bicycle)}
                                                    className="block w-full rounded-sm bg-blue-800 text-sm font-medium transition hover:scale-105"
                                                >
                                                    Buy Now
                                                </Button>
                                            </Link>
                                        </div>
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