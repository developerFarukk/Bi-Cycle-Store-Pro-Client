import AdminDashboard from "@/pages/admin/AllUser";
import CreatProduct from "@/pages/admin/CreatProduct";
import PrivateRoute from "@/privateRoures/PrivetRout";
import { MdManageAccounts, MdViewModule } from "react-icons/md";
import { IoMdBicycle } from "react-icons/io";
import { FaCreativeCommonsShare } from "react-icons/fa";
import ProductsManagment from "@/pages/admin/ProductsManagment";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import OrderManageAdmin from "@/pages/admin/OrderManageAdmin";
import { TbLockPassword } from "react-icons/tb";
import ChangedPassword from "@/authentication/ChangedPassword";
import AdminPrivateRoute from "@/privateRoures/AdminPrivateRoute";
import OverviewAdmin from "@/dashboard/OverviewAdmin";



export const adminPaths = [
    {
        name: 'Overview',
        index: true,
        icons: <MdViewModule />,
        path: 'overview',
        element: <AdminPrivateRoute ><OverviewAdmin /></AdminPrivateRoute>,
    },
    {
        name: 'User Managments',
        icons: <MdManageAccounts />,
        path: 'usermanagements',
        element: <AdminPrivateRoute ><AdminDashboard /></AdminPrivateRoute>,
    },
    {
        name: 'Create Product',
        icons: <FaCreativeCommonsShare />,
        path: 'create-product',
        element: <AdminPrivateRoute ><CreatProduct /></AdminPrivateRoute>,
    },
    {
        name: 'Product Managments',
        icons: <IoMdBicycle />,
        path: 'productmanagments',
        element: <AdminPrivateRoute ><ProductsManagment /></AdminPrivateRoute>,
    },
    {
        name: 'Order Managments',
        icons: <MdOutlineAddShoppingCart />,
        path: 'ordermanagments',
        element: <AdminPrivateRoute ><OrderManageAdmin /></AdminPrivateRoute>,
    },
    {
        name: 'Change Password',
        icons: <TbLockPassword />,
        path: 'changepasswordadmin',
        element: <PrivateRoute><ChangedPassword /></PrivateRoute>,
    },
];
