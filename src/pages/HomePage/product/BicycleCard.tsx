


import { Badge } from "@/components/ui/badge";
import { useGetAllProductsQuery } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
import { setCartItems, TCartItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import BiModel from "@/shared/BiModel";
import HookButton from "@/shared/HookButton";
import LoadingProgress from "@/shared/LoadingProgress";
import { TBicycle } from "@/types/productsManagment";
import { getCartItemsFromLocalStorage, saveCartItemsToLocalStorage } from "@/utils/localUtils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 

const BicycleCard = () => {
    const { data: bicycleData, isLoading, isError } = useGetAllProductsQuery(undefined);
    const bicycle = bicycleData?.data?.result;
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();
    const [cartItems, setCartItemsState] = useState<TCartItem[]>([]);
    const navigate = useNavigate(); 

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

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (isError) {
        return <div>Data no fatch</div>;
    }

    if (!bicycle || !Array.isArray(bicycle)) {
        return <div>No products found</div>;
    }

    // Limit the number of bicycles to 6
    const limitedBicycles = bicycle.slice(0, 6);

    return (
        <div>
            <div className="text-center p-4 mb-4">
                <h2 className="text-4xl font-bold">Our Bicycle Products</h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-2">
                {limitedBicycles.map((bi: TBicycle) => (
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
                                        className="flex  text-sm font-medium justify-end "
                                    >
                                        <BiModel title="View Details" id={bi._id} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-6">
                {/* <button
                    onClick={() => navigate('/all-bicycles')} // Redirect to the "All Bicycles" page
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    View All

                </button> */}
                <button onClick={() => navigate('/all-bicycles')}>
                    <HookButton title="View All" />
                </button>
            </div>
        </div>
    );
};

export default BicycleCard;