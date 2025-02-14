
import MyCart from "@/pages/customer/MyCart";
import OrderManageCustomer from "@/pages/customer/OrderManageCustomer";
import { FaShopify } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";



export const customerPaths = [
    {
        name: 'My Cart',
        index: true,
        path: 'storermanagments',
        icons: <FaShopify />,
        element: <MyCart />,
    },
    {
        name: 'Order Managment',
        index: true,
        path: 'ordermanagments',
        icons: <MdOutlineAddShoppingCart />,
        element: <OrderManageCustomer />,
    },
];