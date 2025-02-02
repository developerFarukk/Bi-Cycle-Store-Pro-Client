import AdminDashboard from "@/pages/admin/AllUser";
import PrivateRoute from "@/privateRoures/PrivetRout";
import { FaShopify } from "react-icons/fa6";



export const adminPaths = [
    {
        name: 'User Managments',
        icons: <FaShopify />,
        path: 'admindashboard',
        element: <PrivateRoute ><AdminDashboard /></PrivateRoute>,
    },
];
