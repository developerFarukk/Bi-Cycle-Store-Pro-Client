import { useGetAllProductsQuery } from "@/redux/features/bicycleProducts/bicycleManagmentApi";
import { useGetAllOrdersQuery } from "@/redux/features/orderManagmentApi/OrderManagmentApi";
import { useGetAllUsersQuery } from "@/redux/features/userManagment/userManagmentApi";



const OverviewAdmin = () => {

    // User Data
    const { data: userData } = useGetAllUsersQuery(undefined);
    const totalUser = userData?.data?.meta?.total;

    // Order data
    const { data: orderData } = useGetAllOrdersQuery(undefined);
    const totalorder = orderData?.data?.meta?.total;

    // Products Data
    const { data: bicycleData } = useGetAllProductsQuery(undefined);
    const bicycle = bicycleData?.data?.meta?.total;



    return (
        <div>
            <div className="lg:flex gap-10">
                <div className="w-60 mt-4 px-4 py-3 hover:bg-blue-50 border-blue-50 border-2 rounded-md shadow-md dark:bg-gray-800">
                    <div>
                        <h1 className="uppercase text-center font-bold">Total User </h1>
                        {totalUser > 0 ?
                            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{totalUser}</h2> :
                            <h2 className="text-center text-4xl mb-5 font-bold mt-4">0</h2>
                        }
                    </div>
                </div>
                <div className="w-60 mt-4 px-4 py-3 hover:bg-blue-50 border-blue-50 border-2 rounded-md shadow-md dark:bg-gray-800">
                    <div>
                        <h1 className="uppercase text-center font-bold">Total Order </h1>
                        {totalorder > 0 ?
                            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{totalorder}</h2> :
                            <h2 className="text-center text-4xl mb-5 font-bold mt-4">0</h2>
                        }
                    </div>
                </div>
                <div className="w-60 mt-4 px-4 py-3 hover:bg-blue-50 border-blue-50 border-2 rounded-md shadow-md dark:bg-gray-800">
                    <div>
                        <h1 className="uppercase text-center font-bold">Total Products </h1>
                        {bicycle > 0 ?
                            <h2 className="text-center text-4xl mb-5 font-bold mt-4">{bicycle}</h2> :
                            <h2 className="text-center text-4xl mb-5 font-bold mt-4">0</h2>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewAdmin;
