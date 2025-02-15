import { useGetMeOrdersQuery } from "@/redux/features/orderManagmentApi/OrderManagmentApi";



const OverviewCustomer = () => {
    const { data: orderMeData } = useGetMeOrdersQuery(undefined);
    const totalMyOrder = orderMeData?.data?.meta?.total;

    return (
        <div>
            <div className="w-full mt-4 px-4 py-3 hover:bg-blue-50 border-blue-50 border-2 rounded-md shadow-md dark:bg-gray-800">
                <div>
                    <h1 className="uppercase text-center font-bold">My Total order </h1>
                    <h2 className="text-center text-4xl mb-5 font-bold mt-4">{totalMyOrder}</h2>
                </div>
            </div>
        </div>
    );
};

export default OverviewCustomer;
