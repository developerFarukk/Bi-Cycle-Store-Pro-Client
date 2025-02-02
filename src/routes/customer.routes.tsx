import MyCart from "@/pages/customer/myCart";
import { FaShopify } from "react-icons/fa6";



export const customerPaths = [
    {
        name: 'My Cart',
        path: 'mycart',
        icons: <FaShopify />,
        element: <MyCart />,
    },
    // {
    //     name: 'Dashboard',
    //     path: 'customerdashboard',
    //     element: <CustoDashboard />,
    // },
    // {
    //     name: 'Home',
    //     path: 'dashboard/home',
    //     element: <CustomerDashboard />,
    // },
];