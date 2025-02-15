import AdminDashboard from "@/pages/admin/AllUser";
import CreatProduct from "@/pages/admin/CreatProduct";
import PrivateRoute from "@/privateRoures/PrivetRout";
import { MdManageAccounts } from "react-icons/md";
import { IoMdBicycle } from "react-icons/io";
import { FaCreativeCommonsShare } from "react-icons/fa";
import ProductsManagment from "@/pages/admin/ProductsManagment";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import OrderManageAdmin from "@/pages/admin/OrderManageAdmin";
import { TbLockPassword } from "react-icons/tb";
import ChangedPassword from "@/authentication/ChangedPassword";



export const adminPaths = [
    {
        name: 'User Managments',
        index: true,
        icons: <MdManageAccounts />,
        path: 'usermanagements',
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
        path: 'productmanagments',
        element: <PrivateRoute ><ProductsManagment /></PrivateRoute>,
    },
    {
        name: 'Order Managments',
        icons: <MdOutlineAddShoppingCart />,
        path: 'ordermanagments',
        element: <PrivateRoute ><OrderManageAdmin /></PrivateRoute>,
    },
    {
        name: 'Change Password',
        path: 'changepasswordadmin',
        icons: <TbLockPassword />,
        element: <ChangedPassword />,
    },
];
