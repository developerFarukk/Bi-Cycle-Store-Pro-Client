import { useGetMeOrdersQuery } from "@/redux/features/orderManagmentApi/OrderManagmentApi";
import LoadingProgress from "@/shared/LoadingProgress";



const OrderManageCustomer = () => {

    const { data: orderMeData, isLoading, isError } = useGetMeOrdersQuery(undefined);
    console.log(orderMeData);

    if (isLoading) {
        return <LoadingProgress />;
    }

    if (isError) {
        return <div>Data no fetch</div>;
    }


    return (
        <div>
            <div> The Component is Start Order Customer </div>
        </div>
    );
};

export default OrderManageCustomer;
