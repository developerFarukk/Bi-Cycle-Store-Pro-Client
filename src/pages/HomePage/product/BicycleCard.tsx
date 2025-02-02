/* eslint-disable @typescript-eslint/no-explicit-any */



import { Badge } from "@/components/ui/badge";
import { useGetAllProductsQuery } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
import { addToCart, setCartItems, TCartItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import BiModel from "@/shared/BiModel";
import LoadingProgress from "@/shared/LoadingProgress";
import { TBicycle } from "@/types/productsManagment";
import { getCartItemsFromLocalStorage, saveCartItemsToLocalStorage } from "@/utils/localUtils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";


const BicycleCard = (
) => {
    const { data: bicycleData, isLoading, isError } = useGetAllProductsQuery(undefined);
    const bicycle = bicycleData?.data?.result;
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();
    const [cartItems, setCartItemsState] = useState<TCartItem[]>([]);
    const cartItem = useAppSelector((state: RootState) => state.cart);

    useEffect(() => {
        if (user) {
            const storedCartItems = getCartItemsFromLocalStorage(user.userId);
            if (storedCartItems) {
                dispatch(setCartItems(storedCartItems));
                setCartItemsState(storedCartItems);
            }
        } else {

            dispatch(setCartItems([]));
            setCartItemsState([]);
        }
    }, [user, dispatch]);

    useEffect(() => {
        if (user && cartItems.length > 0) {
            saveCartItemsToLocalStorage(user.userId, cartItems);
        }
    }, [user, cartItems]);

    const handleAddToCart = (bi: TBicycle) => {

        if (!user) {
            toast.error("You must be logged in to add to cart.");
            return;
        }

        const productInCart = cartItem.items.find((item: any) => item._id === bi._id);
        console.log(productInCart);
        

        if (productInCart) {
            toast.info("Product is already exsist in your cart.");
            return;
        }

        const toastId = toast.loading("Logging out...");
        dispatch(
            addToCart({
                _id: bi._id,
                bicycleImage: bi.bicycleImage,
                brand: bi.brand,
                description: bi.description,
                name: bi.name,
                price: bi.price,
                model: bi.model,
                quantity: 1,
                status: bi.status,
                type: bi.type,
            }),
            user.userId
        );
        toast.success("Add to Card successfully", { id: toastId, duration: 1500 });
    };

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (isError) {
        return <div>Data no fatch</div>;
    }

    if (!bicycle || !Array.isArray(bicycle)) {
        return <div>No products found</div>;
    }

    return (
        <div>
            <div className="text-center p-4 mb-4">
                <h2 className="text-4xl font-bold">Our Bicycle Products</h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-2">
                {bicycle.map((bi: TBicycle) => (
                    <div key={bi._id}>
                        <div className="group relative block overflow-hidden border-2 border-s-fuchsia-100 rounded-lg">
                            {/* Wishlist Button */}
                            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
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
                                    src={bi.bicycleImage}
                                    alt={bi.name}
                                    className="h-64 w-full rounded-tl-md rounded-tr-md object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                />
                                {/* Overlay Text */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <BiModel title="See Details..." id={bi._id} />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="relative border border-gray-100 bg-white p-6">
                                <h3 className="mt-1.5 text-lg font-medium text-gray-900 text-center">{bi.name}</h3>
                                <div className="flex justify-between">
                                    <Badge variant="destructive" className="text-black">
                                        {bi.status}
                                    </Badge>
                                    <p className="text-gray-700">Tk {bi.price}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="mt-1.5 line-clamp-3 text-gray-700">
                                        Brand :<span className="ml-2">{bi.brand}</span>
                                    </p>
                                    <p className="mt-1.5 line-clamp-3 text-gray-700">
                                        Model :<span className="ml-2">{bi.model}</span>
                                    </p>
                                </div>

                                {/* Add to Cart Button */}
                                <div className="mt-4 flex gap-4">

                                    <button
                                        onClick={() => handleAddToCart(bi)}
                                        className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                                    >
                                        Add to Cart
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BicycleCard;
