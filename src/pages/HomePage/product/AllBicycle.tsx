

import { Badge } from "@/components/ui/badge";
import { useGetAllProductsQuery } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
import { setCartItems, TCartItem } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import BiModel from "@/shared/BiModel";
import LoadingProgress from "@/shared/LoadingProgress";
import { TBicycle } from "@/types/productsManagment";
import { getCartItemsFromLocalStorage, saveCartItemsToLocalStorage } from "@/utils/localUtils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Define your BicycleBrand and BicycleType enums
// type BicycleBrand = 'Duranta' | 'Atlas' | 'Hero' | 'Phoenix' | 'Tata Stryder' | 'Avon Cycles' | 'BTwin' | 'Giant' | 'Cannondale' | 'Merida' | 'Suzuki' | 'Bajaz' | 'Royel';
// type BicycleType = 'Road' | 'Mountain' | 'Hybrid' | 'Electric';

const AllBicyclesPage = () => {
    const { data: bicycleData, isLoading, isError } = useGetAllProductsQuery(undefined);
    const bicycle = bicycleData?.data?.result;
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useAppDispatch();
    const [cartItems, setCartItemsState] = useState<TCartItem[]>([]);

    // Fetch and set cart items from localStorage
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

    // Save cart items to localStorage
    useEffect(() => {
        if (user && cartItems.length > 0) {
            saveCartItemsToLocalStorage(user.userId, cartItems);
        }
    }, [user, cartItems]);

    // Search and filter state
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        brand: "",
        category: "",
        minPrice: "",
        maxPrice: "",
        model: "",
        availability: "",
    });

    // Filter bicycles based on search and filters
    const filteredBicycles = bicycle?.filter((bi: TBicycle) => {
        const matchesSearchQuery =
            bi.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bi.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bi.type?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesBrand = filters.brand ? bi.brand === filters.brand : true;
        const matchesCategory = filters.category ? bi.type === filters.category : true;
        const matchesMinPrice = filters.minPrice ? bi.price >= Number(filters.minPrice) : true;
        const matchesMaxPrice = filters.maxPrice ? bi.price <= Number(filters.maxPrice) : true;
        const matchesModel = filters.model ? bi.model === filters.model : true;
        const matchesAvailability = filters.availability ? bi.status === filters.availability : true;

        return (
            matchesSearchQuery &&
            matchesBrand &&
            matchesCategory &&
            matchesMinPrice &&
            matchesMaxPrice &&
            matchesModel &&
            matchesAvailability
        );
    }) || [];

    // Loading and error states
    if (isLoading) {
        return <LoadingProgress />;
    }

    if (isError) {
        return <div>Failed to fetch data</div>;
    }

    if (!bicycle || !Array.isArray(bicycle)) {
        return <div>No products found</div>;
    }

    return (
        <div className="lg:p-2 mt-20">
            <div className="text-center p-4 mb-4">
                <h2 className="text-4xl font-bold">All Bicycle Products</h2>
            </div>

            {/* Search Bar */}
            <div className="mb-6 p-2 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by brand, name, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="lg:w-[60%] md:w-[80%] w-[95%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2 mb-6">
                {/* Brand Filter */}
                <select
                    value={filters.brand}
                    onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Brands</option>
                    {['Duranta', 'Atlas', 'Hero', 'Phoenix', 'Tata Stryder', 'Avon Cycles', 'BTwin', 'Giant', 'Cannondale', 'Merida', 'Suzuki', 'Bajaz', 'Royel'].map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>

                {/* Category Filter */}
                <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Categories</option>
                    {['Road', 'Mountain', 'Hybrid', 'Electric'].map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                {/* Min Price Filter */}
                <input
                    type="number"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Max Price Filter */}
                <input
                    type="number"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Model Filter */}
                <input
                    type="text"
                    placeholder="Model"
                    value={filters.model}
                    onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Availability Filter */}
                <select
                    value={filters.availability}
                    onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All</option>
                    <option value="available">Available</option>
                    <option value="out-of-stock">Out of Stock</option>
                </select>
            </div>

            {/* Bicycle Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-2">
                {filteredBicycles.map((bi: TBicycle) => (
                    <div key={bi._id}>
                        {/* Card Design */}
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
                                    <button className="flex text-sm font-medium justify-end">
                                        <BiModel title="View Details" id={bi._id} />
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

export default AllBicyclesPage;