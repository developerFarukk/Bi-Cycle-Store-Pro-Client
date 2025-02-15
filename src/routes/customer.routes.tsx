
import MyCart from "@/pages/customer/MyCart";
import OrderManageCustomer from "@/pages/customer/OrderManageCustomer";
import { FaShopify } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import ProfileManage from "@/pages/customer/ProfileManage";
import ChangedPassword from "@/authentication/ChangedPassword";
import { TbLockPassword } from "react-icons/tb";



export const customerPaths = [
    {
        name: 'My Cart',
        index: true,
        path: 'storermanagments',
        icons: <FaShopify />,
        element: <MyCart />,
    },
    {
        name: 'Order Managments',
        path: 'ordermanagments',
        icons: <MdOutlineAddShoppingCart />,
        element: <OrderManageCustomer />,
    },
    {
        name: 'Profile Managments',
        path: 'profilemanagments',
        icons: <CgProfile />,
        element: <ProfileManage />,
    },
    {
        name: 'Change Password',
        path: 'changepasswordcustomer',
        icons: <TbLockPassword />,
        element: <ChangedPassword />,
    },
];