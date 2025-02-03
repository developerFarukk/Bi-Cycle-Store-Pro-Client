import AdminDashboard from "@/pages/admin/AllUser";
import CreatProduct from "@/pages/admin/CreatProduct";
import PrivateRoute from "@/privateRoures/PrivetRout";
import { MdManageAccounts } from "react-icons/md";
import { IoMdBicycle } from "react-icons/io";
import { FaCreativeCommonsShare } from "react-icons/fa";
import ProductsManagment from "@/pages/admin/ProductsManagment";



export const adminPaths = [
    {
        name: 'User Managments',
        index: true,
        icons: <MdManageAccounts />,
        path: 'usermanage',
        element: <PrivateRoute ><AdminDashboard /></PrivateRoute>,
    },
    {
        name: 'Create Product',
        icons: <FaCreativeCommonsShare />,
        path: 'create-product',
        element: <PrivateRoute ><CreatProduct /></PrivateRoute>,
    },
    {
        name: 'Product Managments',
        icons: <IoMdBicycle />,
        path: 'productmanagment',
        element: <PrivateRoute ><ProductsManagment /></PrivateRoute>,
    },
];
