import { useGetAllOrdersQuery } from "@/redux/features/orderManagmentApi/OrderManagmentApi";
import { useGetAllUsersQuery } from "@/redux/features/userManagment/userManagmentApi";



const OverviewAdmin = () => {

    const { data: userData } = useGetAllUsersQuery(undefined);
    const totalUser = userData?.data?.meta?.total;

    const { data: orderData } = useGetAllOrdersQuery(undefined);
    const totalorder = orderData?.data?.meta?.total;



    return (
        <div>
            <div className="lg:flex gap-10">
                <div className="w-48 mt-4 px-4 py-3 hover:bg-blue-50 border-blue-50 border-2 rounded-md shadow-md dark:bg-gray-800">
                    <div>
                        <h1 className="uppercase text-center font-bold">Total User </h1>
                        <h2 className="text-center text-4xl mb-5 font-bold mt-4">{totalUser}</h2>
                    </div>
                </div>
                <div className="w-48 mt-4 px-4 py-3 hover:bg-blue-50 border-blue-50 border-2 rounded-md shadow-md dark:bg-gray-800">
                    <div>
                        <h1 className="uppercase text-center font-bold">Total Order </h1>
                        <h2 className="text-center text-4xl mb-5 font-bold mt-4">{totalorder}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewAdmin;
