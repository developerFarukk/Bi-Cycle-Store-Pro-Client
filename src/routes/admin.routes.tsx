import AdminDashboard from "@/pages/admin/AllUser";
import CreatProduct from "@/pages/admin/CreatProduct";
import PrivateRoute from "@/privateRoures/PrivetRout";
import { FaShopify } from "react-icons/fa6";
import { IoMdBicycle } from "react-icons/io";



export const adminPaths = [
    {
        name: 'User Managments',
        index: true,
        icons: <FaShopify />,
        path: 'usermanage',
        element: <PrivateRoute ><AdminDashboard /></PrivateRoute>,
    },
    {
        name: 'Create Product',
        icons: <IoMdBicycle />,
        path: 'create-product',
        element: <PrivateRoute ><CreatProduct /></PrivateRoute>,
    },
];
