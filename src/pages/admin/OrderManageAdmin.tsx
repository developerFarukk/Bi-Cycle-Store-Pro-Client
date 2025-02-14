

import { useGetAllOrdersQuery } from "@/redux/features/orderManagmentApi/OrderManagmentApi";
import LoadingProgress from "@/shared/LoadingProgress";
import { TOrders } from "@/types/orderTypes";
import { useState } from "react";

const OrderManageAdmin = () => {

    const [currentPage, setCurrentPage] = useState(1);


    const { data: orderData, isLoading, isError } = useGetAllOrdersQuery([
        { name: "page", value: currentPage },
        { name: "limit", value: 6 }
    ]);


    const orders = orderData?.data?.result;
    console.log("order Data", orderData?.data?.result);

    const totalorder = orderData?.data?.meta?.total;
    const totalPage = orderData?.data?.meta?.totalPage;
    const limit = orderData?.data?.meta?.limit;

    console.log(orders, totalorder, totalPage, limit);




    if (isLoading) {
        return <LoadingProgress />;
    }

    if (isError) {
        return <div>Data no fetch</div>;
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };


    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    {/* Table Header */}
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            {/* SL */}
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">SL</div>
                                            </th>

                                            {/* Order-Created */}
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Order-Created
                                            </th>

                                            {/* Customer */}
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Customer
                                            </th>

                                            {/* Order-Status */}
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Order-Status
                                            </th>

                                            {/* Product Details */}
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                                <h2 className="text-zinc-800 font-bold">Products</h2>
                                                <thead className="text-center flex justify-center items-center">
                                                    <tr className="">
                                                        {/* Product ID */}
                                                        <th scope="col" className=" text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                                                            Product ID
                                                        </th>

                                                        {/* Quantity */}
                                                        <th scope="col" className="px-10 mx-10 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                                                            Quantity
                                                        </th>

                                                        {/* Unit-Price */}
                                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center text-gray-500 dark:text-gray-400">
                                                            Unit Price
                                                        </th>
                                                    </tr>
                                                </thead>
                                            </th>

                                            {/* Total-Price */}
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Total-Price
                                            </th>

                                            {/* Action */}
                                            <th scope="col" className="text-center px-4 py-3.5 text-sm font-normal  rtl:text-right text-gray-500 dark:text-gray-400">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    {/* Table Body */}
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {orders?.map((or: TOrders, index: number) => (
                                            <tr key={or._id}>
                                                {/* SL */}
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">{index + 1}</div>
                                                </td>

                                                {/* Order-Created */}
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {formatDate(or.createdAt)}
                                                </td>

                                                {/* Customer */}
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img
                                                            className="object-cover w-8 h-8 rounded-full"
                                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                            alt="Customer"
                                                        />
                                                        <div>
                                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                                                {or.user.name}
                                                            </h2>
                                                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                                                {or.user.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* Order-Status */}
                                                <td className="px-4 py-4 text-sm  text-blue-500 dark:text-gray-300 whitespace-nowrap">
                                                    {or.status}
                                                </td>

                                                {/* Product Details */}
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <table className="w-full">
                                                        <tbody>
                                                            {or.products.map((product, productIndex) => (
                                                                <tr key={productIndex}>
                                                                    {/* Product ID */}
                                                                    <td className="px-4 py-2 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                        {product.product._id}
                                                                    </td>

                                                                    {/* Quantity */}
                                                                    <td className="px-4 py-2 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                        {product.quantity}
                                                                    </td>

                                                                    {/* Unit-Price */}
                                                                    <td className="px-4 py-2 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                                        {product.product.price}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </td>

                                                {/* Total-Price */}
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {or.totalPrice}
                                                </td>

                                                {/* Action */}
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-6">
                                                        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                            Edit
                                                        </button>
                                                        <button className="text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6 mb-10">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                        <span>
                            previous
                        </span>
                    </button>

                    <div className="items-center hidden md:flex gap-x-3">
                        {Array.from({ length: totalPage }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-2 py-1 text-sm ${currentPage === index + 1 ? 'text-blue-500 bg-blue-100/60' : 'text-gray-500'} rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPage}
                        className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                        <span>
                            Next
                        </span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default OrderManageAdmin;